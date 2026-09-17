"""
This file is responsible for downloading stock market data using the yfinance library.
"""

import threading
from datetime import datetime, timedelta

import yfinance as yf
import pandas as pd
from fastapi import HTTPException


FOREX_SYMBOL_MAP = {
    "EUR-USD": "EURUSD=X",
    "GBP-USD": "GBPUSD=X",
    "USD-JPY": "USDJPY=X",
    "USD-CHF": "USDCHF=X",
    "AUD-USD": "AUDUSD=X",
}

def websocket_worker(symbol: str) -> None:
    """_summary_

    :param symbol: _description_
    :type symbol: str
    """
    with yf.WebSocket(verbose=False) as ws:
        ws.subscribe([symbol])
        ws.listen()


def start_live_data_download() -> None:
    """_summary_"""
    thread = threading.Thread(target=websocket_worker, daemon=True)

    thread.start()


def normalize_yfinance_symbol(symbol: str, asset_type: str) -> str:
    """
    Map UI forex symbols to yfinance tickers.
    Pairs like EUR-USD return flat OHLC data; EURUSD=X has proper candles.
    """
    if asset_type.lower() != "forex":
        return symbol

    if symbol in FOREX_SYMBOL_MAP:
        return FOREX_SYMBOL_MAP[symbol]

    if symbol.endswith("=X"):
        return symbol

    return symbol.replace("-", "") + "=X"


def _validate_interval(interval: str) -> None:
    allowed = ["1m", "2m", "5m", "15m", "30m", "60m", "1h", "4h", "1d", "5d"]
    if interval not in allowed:
        raise HTTPException(
            status_code=400, detail=f"Invalid interval '{interval}'. Allowed: {allowed}"
        )


def download_data(
    symbol: str, period: int, interval: str, time_back: int
) -> pd.DataFrame:
    """
    This function is responsible for downloading market data from yahoo finance
    :param symbol: stock market symbol
    :type symbol: str
    :param period: data time peroid
    :type period: str
    :param interval: market interval eg. 1m, 15m
    :type interval: str
    :param time_back: backward time
    :type time_back: str
    :return: downloaded stock market data
    :rtype: pd.DataFrame
    """
    start = datetime.now() - timedelta(days=period + time_back)
    end = datetime.now() - timedelta(days=time_back)
    interval = interval.replace(" ", "")

    _validate_interval(interval)

    data: pd.DataFrame = yf.download(
        symbol,
        start=start,
        end=end,
        interval=interval,
        auto_adjust=False,
        progress=False,
    )[["Open", "High", "Low", "Close", "Volume"]]

    if data.empty:
        raise HTTPException(
            status_code=400,
            detail="No market data returned for this symbol and interval.",
        )

    data.columns = data.columns.get_level_values(0)
    data = data.reset_index()

    if "Datetime" not in data.columns:
        data = data.reset_index()
        data.rename(columns={"Date": "Datetime"}, inplace=True)

    data["Datetime"] = data["Datetime"].astype("int64") * 1_000
    return data

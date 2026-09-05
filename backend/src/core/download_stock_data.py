"""
This file is responsible for downloading stock market data using the yfinance library.
"""

import threading

import yfinance as yf
import pandas as pd


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
    period_str = str(period - time_back) + "d"
    interval = interval.replace(" ", "")

    data: pd.DataFrame = yf.download(
        symbol, period=period_str, interval=interval, auto_adjust=False, progress=False
    )[["Open", "High", "Low", "Close", "Volume"]]

    data.columns = data.columns.get_level_values(0)
    data = data.reset_index()
    data["Datetime"] = data["Datetime"].astype("int64") * 1_000
    return data

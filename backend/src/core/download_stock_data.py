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


def download_data(symbol: str, period: str, interval: str) -> pd.DataFrame:
    """
    This function is responsible for downloading market data from yahoo finance
    :param symbol: stock market symbol
    :type symbol: str
    :param period: data time peroid
    :type period: str
    :param interval: market interval eg. 1m, 15m
    :type interval: str
    :return: downloaded stock market data
    :rtype: pd.DataFrame
    """
    data: pd.DataFrame = yf.download(
        symbol, period=period, interval=interval, auto_adjust=False, progress=False
    )[["Open", "High", "Low", "Close", "Volume"]]

    data.columns = data.columns.get_level_values(0)
    return data

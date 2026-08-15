"""
This file contains functions that are used to calculate the values of technical indicators based on data from
financial markets.
"""

from typing import Tuple

import pandas as pd


def calculate_sma(data: pd.DataFrame, period: int = 14) -> Tuple[float, float]:
    """
    This function is responsible for calculate sma based on financial data.
    :param data: data.
    :param period: sma period.
    :return: sma data.
    """
    closes = data["Close"]
    ma = closes.tail(period).mean()
    sma = closes.rolling(period).mean()
    return ma, sma


def calculate_rsi(data: pd.DataFrame, period: int = 14) -> float:
    """
    This function is responsible for calculate rsi based on financial data.
    :param data: data.
    :param period: rsi period.
    :return: rsi data.
    """
    delta = data["Close"].diff()
    gain = (delta.where(delta > 0, 0)).rolling(window=period).mean()
    loss = (-delta.where(delta < 0, 0)).rolling(window=period).mean()
    rs = gain / loss
    rsi = 100 - (100 / (1 + rs))
    return rsi


def calculate_bollinger_bands(
    data: pd.DataFrame, period: int = 20, multiplier: int = 2
) -> Tuple[float, float, float]:
    """
    This function is responsible for calculate bb based on financial data.
    :param data: data.
    :param period: bb period.
    :param multiplier: number.
    :return: bb data.
    """
    ma = data["Close"].rolling(window=period).mean()
    std = data["Close"].rolling(window=period).std()
    upper_band = ma + (std * multiplier)
    lower_band = ma - (std * multiplier)
    return upper_band, lower_band, std


def calculate_macd(
    data: pd.DataFrame,
    short_period: int = 12,
    long_period: int = 26,
    signal_period: int = 9,
) -> tuple[float, float, float]:
    """
    This function is responsible for calculate macd based on financial data.
    :param data: data.
    :param short_period: short macd period.
    :param long_period: long macd period.
    :param signal_period: macd signal period.
    :return: macd data.
    """
    short_ema = data["Close"].ewm(span=short_period, adjust=False).mean()
    long_ema = data["Close"].ewm(span=long_period, adjust=False).mean()
    macd_line = short_ema - long_ema
    signal_line = macd_line.ewm(span=signal_period, adjust=False).mean()
    macd_hist = macd_line - signal_line
    return macd_line, signal_line, macd_hist.iloc[-5:].values


def calculate_adx(data: pd.DataFrame, period: int = 14) -> Tuple[float, float, float]:
    """
    This function is responsible for calculate adx based on financial data.
    :param data: financial data.
    :param period: adx period.
    :return: adx data.
    """
    high = data["High"]
    low = data["Low"]
    close = data["Close"]
    tr = pd.concat(
        [high - low, abs(high - close.shift()), abs(low - close.shift())], axis=1
    ).max(axis=1)
    atr = tr.rolling(window=period).mean()
    pdm = (
        (high - high.shift())
        .where((high - high.shift()) > (low.shift() - low), 0)
        .rolling(window=period)
        .mean()
    )
    ndm = (
        (low.shift() - low)
        .where((low.shift() - low) > (high - high.shift()), 0)
        .rolling(window=period)
        .mean()
    )
    pdi = 100 * (pdm / atr)
    ndi = 100 * (ndm / atr)
    adx = 100 * abs((pdi - ndi) / (pdi + ndi)).rolling(window=period).mean()
    return adx, pdi, ndi
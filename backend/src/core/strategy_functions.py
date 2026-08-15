"""
The functions in this file are responsible for calculating the values of investment signals generated
by expert systems using fuzzy logic.
"""

import numpy as np
import pandas as pd


def calculate_signals_rsi(
    rsi: float,
    num: int,
    signals_buy: np.ndarray,
    signals_sell: np.ndarray,
    signals_hold: np.ndarray,
) -> None:
    """
    This function calculate transaction signal for rsi indicator using fuzzy logic.
    :param rsi: rsi data.
    :param num: array position.
    :param signals_buy: buy data.
    :param signals_sell: sell data.
    :param signals_hold: hold data.
    :return: nothing, modifies existing array.
    """
    rsi_values = np.array([22, 30, 34, 46, 54, 66, 70, 78], dtype=np.int16)
    signals_buy[num] = signals_hold[num] = signals_sell[num] = 0

    if rsi <= rsi_values[0]:
        signals_hold[num], signals_buy[num], signals_sell[num] = 1, 0, 0

    elif rsi_values[0] < rsi < rsi_values[1]:
        signals_buy[num] = (rsi - rsi_values[0]) / (rsi_values[1] - rsi_values[0])
        signals_hold[num] = (rsi_values[1] - rsi) / (rsi_values[1] - rsi_values[0])

    elif rsi_values[1] <= rsi <= rsi_values[2]:
        signals_buy[num], signals_sell[num], signals_hold[num] = 1, 0, 0

    elif rsi_values[2] < rsi < rsi_values[3]:
        signals_buy[num] = (rsi_values[3] - rsi) / (rsi_values[3] - rsi_values[2])
        signals_hold[num] = (rsi - rsi_values[2]) / (rsi_values[3] - rsi_values[2])

    elif rsi_values[3] <= rsi <= rsi_values[4]:
        signals_hold[num], signals_buy[num], signals_sell[num] = 1, 0, 0

    elif rsi_values[4] < rsi < rsi_values[5]:
        signals_hold[num] = (rsi_values[5] - rsi) / (rsi_values[5] - rsi_values[4])
        signals_sell[num] = (rsi - rsi_values[4]) / (rsi_values[5] - rsi_values[4])

    elif rsi_values[5] <= rsi <= rsi_values[6]:
        signals_sell[num], signals_hold[num], signals_buy[num] = 1, 0, 0

    elif rsi_values[6] < rsi < rsi_values[7]:
        signals_hold[num] = (rsi - rsi_values[6]) / (rsi_values[7] - rsi_values[6])
        signals_sell[num] = (rsi_values[7] - rsi) / (rsi_values[7] - rsi_values[6])

    elif rsi >= rsi_values[7]:
        signals_hold[num], signals_buy[num], signals_sell[num] = 1, 0, 0

    signals_buy[num], signals_sell[num], signals_hold[num] = np.round(
        [signals_buy[num], signals_sell[num], signals_hold[num]], 5
    )


def calculate_signals_sma(
    sma_n: float,
    sma_m: float,
    num: int,
    signals_buy: np.ndarray,
    signals_sell: np.ndarray,
    signals_hold: np.ndarray,
) -> None:
    """
    This function calculate transaction signal for sma indicator using fuzzy logic.
    :param sma_n: short sma.
    :param sma_m: long sma.
    :param num: array position.
    :param signals_buy: buy data.
    :param signals_sell: sell data.
    :param signals_hold: hold data.
    :return:
    """
    sma1, sma2, sma3, sma4 = -2.5, -0.8, 0.8, 2.5
    signals_buy[num] = signals_hold[num] = signals_sell[num] = 0
    sma_d = sma_n - sma_m

    if sma_d <= sma1:
        signals_sell[num] = 1
        signals_hold[num] = 0
        signals_buy[num] = 0
    elif sma1 < sma_d < sma2:
        signals_sell[num] = (sma2 - sma_d) / (sma2 - sma1)

    if sma_d >= sma4:
        signals_buy[num] = 1
        signals_sell[num] = 0
        signals_hold[num] = 0
    elif sma3 < sma_d < sma4:
        signals_buy[num] = (sma_d - sma3) / (sma4 - sma3)

    if sma2 <= sma_d <= sma3:
        signals_hold[num] = 1
        signals_buy[num] = 0
        signals_sell[num] = 0
    elif sma1 < sma_d < sma2:
        signals_hold[num] = (sma_d - sma1) / (sma2 - sma1)
    elif sma3 < sma_d < sma4:
        signals_hold[num] = (sma4 - sma_d) / (sma4 - sma3)

    signals_buy[num], signals_sell[num], signals_hold[num] = np.round(
        [signals_buy[num], signals_sell[num], signals_hold[num]], 5
    )


def calculate_signals_bollinger_bands(
    data: pd.DataFrame,
    bb_up_line: float,
    bb_down_line: float,
    num: int,
    signals_buy: np.ndarray,
    signals_sell: np.ndarray,
    signals_hold: np.ndarray,
) -> None:
    """
    This function calculate transaction signal for bb indicator using fuzzy logic.
    :param data: financial data.
    :param bb_up_line: upper band data.
    :param bb_down_line: down band data.
    :param num: array position.
    :param signals_buy: buy data.
    :param signals_sell: sell data.
    :param signals_hold: hold data.
    :return: nothing, modifies existing array.
    """
    signals_buy[num] = signals_hold[num] = signals_sell[num] = 0
    current_price = data["Close"].iloc[-1]
    delta_bb = (bb_up_line - bb_down_line) / current_price

    b1 = delta_bb * (bb_up_line - bb_down_line) * 1.2
    b2 = delta_bb * (bb_up_line - bb_down_line) * 1.3

    x1 = bb_down_line - b1
    x2 = bb_down_line + b2
    x3 = bb_up_line - b1
    x4 = bb_up_line + b2

    if current_price <= x1:
        signals_buy[num], signals_sell[num], signals_hold[num] = 1, 0, 0
    elif x1 < current_price < x2:
        signals_buy[num] = (x2 - current_price) / (x2 - x1)

    if current_price >= x4:
        signals_sell[num], signals_buy[num], signals_hold[num] = 1, 0, 0
    elif x3 < current_price < x4:
        signals_sell[num] = (current_price - x3) / (x4 - x3)

    if x2 <= current_price <= x3:
        signals_hold[num], signals_sell[num], signals_buy[num] = 1, 0, 0
    elif x1 < current_price < x2:
        signals_hold[num] = (current_price - x1) / (x2 - x1)
    elif x3 < current_price < x4:
        signals_hold[num] = (x4 - current_price) / (x4 - x3)

    signals_buy[num], signals_sell[num], signals_hold[num] = np.round(
        [signals_buy[num], signals_sell[num], signals_hold[num]], 5
    )


def calculate_signals_macd(
    hist: np.ndarray,
    num: int,
    signals_buy: np.ndarray,
    signals_sell: np.ndarray,
    signals_hold: np.ndarray,
) -> None:
    """
    This function calculate transaction signal for macd indicator using fuzzy logic.
    :param hist: histogram data.
    :param num: position in array.
    :param signals_buy: buy data.
    :param signals_sell: sell data.
    :param signals_hold: hold data.
    :return: nothing, modifies existing array.
    """
    signals_buy[num] = signals_hold[num] = signals_sell[num] = 0
    current_price = hist[-1]
    avg = np.abs(np.sum(hist[-4:]) / 4)

    x1 = -2 * avg
    x2 = -avg
    x3 = avg
    x4 = 2 * avg

    if current_price <= x1:
        signals_sell[num], signals_buy[num], signals_hold[num] = 1, 0, 0
    elif x1 < current_price < x2:
        signals_sell[num] = (x2 - current_price) / (x2 - x1)

    if current_price >= x4:
        signals_buy[num], signals_hold[num], signals_sell[num] = 1, 0, 0
    elif x3 < current_price < x4:
        signals_buy[num] = (current_price - x3) / (x4 - x3)

    if x2 <= current_price <= x3:
        signals_hold[num], signals_sell[num], signals_buy[num] = 1, 0, 0
    elif x1 < current_price < x2:
        signals_hold[num] = (current_price - x1) / (x2 - x1)
    elif x3 < current_price < x4:
        signals_hold[num] = (x4 - current_price) / (x4 - x3)

    signals_buy[num], signals_sell[num], signals_hold[num] = np.round(
        [signals_buy[num], signals_sell[num], signals_hold[num]], 5
    )


def calculate_signals_adx(
    adx: pd.Series,
    pdm: pd.Series,
    ndm: pd.Series,
    num: int,
    signals_buy: np.ndarray,
    signals_sell: np.ndarray,
    signals_hold: np.ndarray,
) -> None:
    """
    This function calculate transaction signal for adx indicator using fuzzy logic.
    :param adx: adx data.
    :param pdm: positive data.
    :param ndm: negative data.
    :param num: position in array.
    :param signals_buy: buy data.
    :param signals_sell: sell data.
    :param signals_hold: hold data.
    :return: nothing, modifies existing array.
    """
    signals_buy[num] = signals_hold[num] = signals_sell[num] = 0
    x1, x2, x3, x4 = -40, -18, 18, 40
    adx_value = adx.iloc[-1]

    if adx_value > 20:
        if pdm.iloc[-1] - ndm.iloc[-1] < 0:
            adx_value = -adx_value

        if adx_value <= x1:
            signals_sell[num], signals_buy[num], signals_hold[num] = 1, 0, 0
        elif x1 < adx_value < x2:
            signals_sell[num] = (x2 - adx_value) / (x2 - x1)

        if adx_value >= x4:
            signals_buy[num], signals_hold[num], signals_sell[num] = 1, 0, 0
        elif x3 < adx_value < x4:
            signals_buy[num] = (adx_value - x3) / (x4 - x3)

        if x2 <= adx_value <= x3:
            signals_hold[num], signals_sell[num], signals_buy[num] = 1, 0, 0
        elif x1 < adx_value < x2:
            signals_hold[num] = (adx_value - x1) / (x2 - x1)
        elif x3 < adx_value < x4:
            signals_hold[num] = (x4 - adx_value) / (x4 - x3)
    else:
        signals_hold[num], signals_sell[num], signals_buy[num] = 1, 0, 0

    signals_buy[num], signals_sell[num], signals_hold[num] = np.round(
        [signals_buy[num], signals_sell[num], signals_hold[num]], 5
    )


def calculate_signals_volume(
    data: pd.DataFrame,
    num: int,
    signals_buy: np.ndarray,
    signals_sell: np.ndarray,
    signals_hold: np.ndarray,
) -> None:
    """
    This function calculate transaction signal for volume indicator using fuzzy logic.
    :param data: data.
    :param num: position in array.
    :param signals_buy: buy data.
    :param signals_sell: sell data.
    :param signals_hold: hold data.
    :return: nothing, modifies existing array.
    """
    values = np.array(data["tick_volume"].iloc[-10:-2])
    current_value = data["tick_volume"].iloc[-2]
    mean = values.mean()
    min_value = mean * 0.9
    max_value = mean * 1.1

    if min_value <= current_value <= max_value:
        signals_buy[num] = signals_hold[num] = signals_sell[num] = 0.33
    elif current_value < min_value:
        signals_hold[num] = 1
        signals_buy[num] = 0
        signals_sell[num] = 0
    else:
        signals_hold[num] = 0
        signals_buy[num] = 0.5
        signals_sell[num] = 0.5
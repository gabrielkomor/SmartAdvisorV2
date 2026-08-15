"""
This file stores functions that are responsible for aggregating data from trading signals.
"""

import numpy as np


def additive_method(
    signals_buy: np.ndarray, signals_sell: np.ndarray, signals_hold: np.ndarray
) -> np.ndarray:
    """
    This function is responsible for aggregate indicator signals values.
    :param signals_buy: buy data.
    :param signals_sell: sell data.
    :param signals_hold: hold data.
    :return: aggregated data.
    """
    number = signals_buy.size

    vd_buy = np.sum(signals_buy) / number
    vd_sell = np.sum(signals_sell) / number
    vd_hold = np.sum(signals_hold) / number
    vd_max = np.max([vd_buy, vd_sell, vd_hold])

    if vd_max == vd_hold:
        return np.array([0, 0, 1])
    elif vd_max == vd_buy:
        return np.array([1, 0, 0])
    else:
        return np.array([0, 1, 0])


def majority_vote_method(
    signals_buy: np.ndarray, signals_sell: np.ndarray, signals_hold: np.ndarray
) -> np.ndarray:
    """
    This function is responsible for aggregate indicator signals values.
    :param signals_buy: buy data.
    :param signals_sell: sell data.
    :param signals_hold: hold data.
    :return: aggregated data.
    """
    pos_buy = sum(1 for x in signals_buy if x > 0)
    pos_sell = sum(1 for x in signals_sell if x > 0)
    pos_hold = sum(1 for x in signals_hold if x > 0)

    max_value = max(pos_buy, pos_sell, pos_hold)

    if max_value == pos_hold:
        return np.array([0, 0, 1])
    elif max_value == pos_buy:
        return np.array([1, 0, 0])
    else:
        return np.array([0, 1, 0])


def median_method(
    signals_buy: np.ndarray, signals_sell: np.ndarray, signals_hold: np.ndarray
) -> np.ndarray:
    """
    This function is responsible for aggregate indicator signals values.
    :param signals_buy: buy data.
    :param signals_sell: sell data.
    :param signals_hold: hold data.
    :return: aggregated data.
    """
    median_buy = np.median(signals_buy)
    median_sell = np.median(signals_sell)
    median_hold = np.median(signals_hold)

    max_value = np.max([median_buy, median_sell, median_hold])

    if max_value == median_hold:
        return np.array([0, 0, 1])
    elif max_value == median_buy:
        return np.array([1, 0, 0])
    else:
        return np.array([0, 1, 0])


def percentage_method_values(
    signals_buy: np.ndarray, signals_sell: np.ndarray, signals_hold: np.ndarray
) -> np.ndarray:
    """
    This function is responsible for aggregate indicator signals values.
    :param signals_buy: buy data.
    :param signals_sell: sell data.
    :param signals_hold: hold data.
    :return: aggregated data.
    """
    number = signals_buy.size

    vd_buy = round((np.sum(signals_buy) / number) * 100, 2)
    vd_sell = round((np.sum(signals_sell) / number) * 100, 2)
    vd_hold = round((np.sum(signals_hold) / number) * 100, 2)
    result = np.array([vd_buy, vd_sell, vd_hold])

    return result
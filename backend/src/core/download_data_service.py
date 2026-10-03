"""
This file contains functions for download data endpoint
"""

import pandas as pd
import numpy as np

from src.schemas.download_data_schema import DownloadDataResposne
from src.core.download_stock_data import download_data, normalize_yfinance_symbol
from src.core.bsh_history import calculate_history_data
from src.core.calculate_strategies_methods import (
    calculate_strategies,
    calculate_signals,
    interpret_strategies_result,
    parse_expert_signals,
)


def _normalize_history_signals(history_array: np.ndarray, index: int) -> tuple:
    """
    This function is responsible for change numbers into tradin signals like BUY, SELL, HOLD
    :param history_array: array of signals
    :type history_array: np.ndarray
    :param index: index of the array where we need to find signals
    :type index: int
    :return: changed signals
    :rtype: tuple
    """
    result = []

    buy_signals = [float(row[index][0]) for row in history_array]
    sell_signals = [float(row[index][1]) for row in history_array]

    for b, s in zip(buy_signals, sell_signals):
        if b == 1:
            result.append("BUY")
        elif s == 1:
            result.append("SELL")
        else:
            result.append("HOLD")
    return tuple(result)


def _get_history_signals(history_array: np.ndarray, period: int) -> dict:
    """
    This function is responsible for retrieve signals from the history array for a given period.
    :param history_array: array of signals
    :type history_array: np.ndarray
    :param index: index of the array where we need to find signals
    :type index: int
    :return: payload data
    :rtype: dict
    """
    return {
        "period": period,
        "history": {
            "probabilities": {
                "buy": [float(row[0][0]) for row in history_array],
                "sell": [float(row[0][1]) for row in history_array],
                "hold": [float(row[0][2]) for row in history_array],
            },
            "additive": {
                "decisions": _normalize_history_signals(history_array, 1),
            },
            "majority": {
                "decisions": _normalize_history_signals(history_array, 2),
            },
            "median": {
                "decisions": _normalize_history_signals(history_array, 3),
            },
        },
    }


def process_download_data(data) -> DownloadDataResposne:
    """
    This function downloads market data and calculates trading signals
    based on the selected technical indicators and strategies.
    :param data: Request data containing the symbol, time frame, time delta,
        and historical data range.
    :type data: DownloadData
    :return: Market data, aggregated strategy signals, and expert signals.
    :rtype: DownloadDataResposne
    """
    yfinance_symbol = normalize_yfinance_symbol(data.symbol, data.type)
    market_data: pd.DataFrame = download_data(
        yfinance_symbol, data.time_delta, data.time_frame, data.time_back
    )
    strategies: dict[str, object] = calculate_strategies(market_data)
    signals_buy, signals_sell, signals_hold = calculate_signals(market_data, strategies)
    strategies_result = interpret_strategies_result(
        signals_buy, signals_sell, signals_hold
    )

    market_data_dict = {"market_data": market_data.to_dict(orient="records")}
    strategies_result_dict: dict[str, str] = {
        "additive_method": strategies_result[0],
        "majority_method": strategies_result[1],
        "median_method": strategies_result[2],
    }
    expert_result_dict: dict[str, str] = parse_expert_signals(
        signals_buy, signals_sell, signals_hold
    )

    history_data = calculate_history_data(market_data, 20)
    history_array, period = history_data
    history_dict = _get_history_signals(history_array, period)

    return DownloadDataResposne(
        market_data=market_data_dict,
        aggregation_signals=strategies_result_dict,
        experts_signals=expert_result_dict,
        history_signals=history_dict,
    )

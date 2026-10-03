"""
This file is responsible for communication with frontend.
"""

from fastapi import APIRouter
import pandas as pd

from src.schemas.download_data_schema import DownloadData, DownloadDataResposne
from src.core.download_stock_data import download_data, normalize_yfinance_symbol
from src.core.bsh_history import calculate_history_data
from src.core.calculate_strategies_methods import (
    calculate_strategies,
    calculate_signals,
    interpret_strategies_result,
    parse_expert_signals,
)

router = APIRouter()


@router.post("/download_data_api", response_model=DownloadDataResposne)
async def download_data_api(data: DownloadData) -> DownloadDataResposne:
    """
    This endpoint downloads market data and calculates trading signals
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

    history_dict = {
        "period": period,
        "history": {
            "probabilities": {
                "buy": [float(row[0][0]) for row in history_array],
                "sell": [float(row[0][1]) for row in history_array],
                "hold": [float(row[0][2]) for row in history_array],
            },
            "additive": {
                "buy": [float(row[1][0]) for row in history_array],
                "sell": [float(row[1][1]) for row in history_array],
                "hold": [float(row[1][2]) for row in history_array],
            },
            "majority": {
                "buy": [float(row[2][0]) for row in history_array],
                "sell": [float(row[2][1]) for row in history_array],
                "hold": [float(row[2][2]) for row in history_array],
            },
            "median": {
                "buy": [float(row[3][0]) for row in history_array],
                "sell": [float(row[3][1]) for row in history_array],
                "hold": [float(row[3][2]) for row in history_array],
            },
        },
    }

    return DownloadDataResposne(
        market_data=market_data_dict,
        aggregation_signals=strategies_result_dict,
        experts_signals=expert_result_dict,
        history_signals=history_dict,
    )

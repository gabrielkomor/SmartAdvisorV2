"""
This file is responsible for communication with frontend.
"""

from fastapi import APIRouter
import pandas as pd

from src.schemas.download_data_schema import DownloadData, DownloadDataResposne
from src.core.download_stock_data import download_data
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
    market_data: pd.DataFrame = download_data(
        data.symbol, data.time_delta, data.time_frame
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
    return DownloadDataResposne(
        market_data=market_data_dict,
        aggregation_signals=strategies_result_dict,
        experts_signals=expert_result_dict,
    )

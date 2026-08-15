from typing import Dict

from fastapi import APIRouter
import pandas as pd

from src.schemas.download_data_schema import DownloadData, DownloadDataResposne
from src.core.download_stock_data import download_data
from src.core.calculate_strategies_methods import calculate_strategies, calculate_signals, interpret_strategies_result

router = APIRouter()

@router.post("/download_data_api", response_model=DownloadDataResposne)
async def download_data_api(data: DownloadData) -> DownloadDataResposne:
    market_data: pd.DataFrame = download_data(data.symbol, data.time_delta, data.time_frame)
    strategies: Dict[str, pd.DataFrame | float] = calculate_strategies(market_data)
    signals_buy, signals_sell, signals_hold = calculate_signals(market_data, strategies)
    strategies_result = interpret_strategies_result(signals_buy, signals_sell, signals_hold)

    market_data_dict = {"market_data": market_data.to_dict(orient="records")}
    strategies_result_dict = {
        "additive_method": strategies_result[0],
        "majority_method": strategies_result[1],
        "median_method": strategies_result[2]
    }

    return DownloadDataResposne(data=market_data_dict, signals=strategies_result_dict)

"""
This file is responsible for communication with frontend.
"""

from fastapi import APIRouter

from src.schemas.download_data_schema import DownloadData, DownloadDataResposne
from src.core.download_data_service import process_download_data

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
    return process_download_data(data)

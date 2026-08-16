"""
This file contains schemas for restapi communication.
"""

from pydantic import BaseModel


class DownloadData(BaseModel):
    """
    Schema for download data.
    """

    type: str
    symbol: str
    time_frame: str
    time_delta: str
    time_back: str


class DownloadDataResposne(BaseModel):
    """
    Schema for download data response.
    """

    market_data: dict
    aggregation_signals: dict
    experts_signals: dict

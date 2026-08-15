from pydantic import BaseModel


class DownloadData(BaseModel):
    type: str
    symbol: str
    time_frame: str
    time_delta: str
    time_back: str


class DownloadDataResposne(BaseModel):
    data: dict
    signals: dict

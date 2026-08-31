"""
This file contains example stock market data.
"""

import pytest
import pandas as pd
import numpy as np
from pandas import Timestamp


@pytest.fixture
def strategies_values() -> dict:
    """
    This function is responsible for creating example strategies data.
    :return: sample strategies data
    :rtype: dict
    """
    return {
        "sma_10": 215.7654602050781,
        "sma_30": 218.20536041259766,
        "rsi": pd.Series([32.27551321124943]),
        "bb_upper": pd.Series([220.26088702307322]),
        "bb_lower": pd.Series([213.65072338952444]),
        "macd_hist": np.array([0.05610227112835231]),
        "adx": pd.Series([26.341779845201575]),
        "adx_pdi": pd.Series([13.005467071507226]),
        "adx_ndi": pd.Series([21.99661244130494]),
    }


@pytest.fixture
def raw_stock_data() -> pd.DataFrame:
    """
    This function is responsible for creating example stock market data.
    :return: sample market data
    :rtype: pd.DataFrame
    """
    raw_data: dict = {
        "Open": {
            Timestamp(
                "2026-08-17 09:30:00-0400", tz="America/New_York"
            ): 226.02000427246094,
            Timestamp(
                "2026-08-17 10:30:00-0400", tz="America/New_York"
            ): 226.60000610351562,
            Timestamp(
                "2026-08-17 11:30:00-0400", tz="America/New_York"
            ): 227.46499633789062,
            Timestamp(
                "2026-08-17 12:30:00-0400", tz="America/New_York"
            ): 227.03089904785156,
            Timestamp(
                "2026-08-17 13:30:00-0400", tz="America/New_York"
            ): 225.91000366210938,
            Timestamp(
                "2026-08-17 14:30:00-0400", tz="America/New_York"
            ): 225.5301055908203,
            Timestamp(
                "2026-08-17 15:30:00-0400", tz="America/New_York"
            ): 225.49000549316406,
            Timestamp(
                "2026-08-18 09:30:00-0400", tz="America/New_York"
            ): 220.4499969482422,
            Timestamp(
                "2026-08-18 10:30:00-0400", tz="America/New_York"
            ): 219.94000244140625,
            Timestamp(
                "2026-08-18 11:30:00-0400", tz="America/New_York"
            ): 219.52999877929688,
            Timestamp(
                "2026-08-18 12:30:00-0400", tz="America/New_York"
            ): 219.52999877929688,
            Timestamp(
                "2026-08-18 13:30:00-0400", tz="America/New_York"
            ): 220.30999755859375,
            Timestamp(
                "2026-08-18 14:30:00-0400", tz="America/New_York"
            ): 219.92999267578125,
            Timestamp(
                "2026-08-18 15:30:00-0400", tz="America/New_York"
            ): 219.24000549316406,
            Timestamp(
                "2026-08-19 09:30:00-0400", tz="America/New_York"
            ): 221.6699981689453,
            Timestamp(
                "2026-08-19 10:30:00-0400", tz="America/New_York"
            ): 218.14999389648438,
            Timestamp(
                "2026-08-19 11:30:00-0400", tz="America/New_York"
            ): 219.2550048828125,
            Timestamp(
                "2026-08-19 12:30:00-0400", tz="America/New_York"
            ): 219.3800048828125,
            Timestamp(
                "2026-08-19 13:30:00-0400", tz="America/New_York"
            ): 218.9803924560547,
            Timestamp(
                "2026-08-19 14:30:00-0400", tz="America/New_York"
            ): 219.16000366210938,
            Timestamp(
                "2026-08-19 15:30:00-0400", tz="America/New_York"
            ): 219.5399932861328,
            Timestamp(
                "2026-08-20 09:30:00-0400", tz="America/New_York"
            ): 218.36000061035156,
            Timestamp("2026-08-20 10:30:00-0400", tz="America/New_York"): 217.5,
            Timestamp(
                "2026-08-20 11:30:00-0400", tz="America/New_York"
            ): 216.8000030517578,
            Timestamp(
                "2026-08-20 12:30:00-0400", tz="America/New_York"
            ): 216.8350067138672,
            Timestamp(
                "2026-08-20 13:30:00-0400", tz="America/New_York"
            ): 216.3000030517578,
            Timestamp(
                "2026-08-20 14:30:00-0400", tz="America/New_York"
            ): 216.88099670410156,
            Timestamp(
                "2026-08-20 15:30:00-0400", tz="America/New_York"
            ): 217.44000244140625,
            Timestamp(
                "2026-08-21 09:30:00-0400", tz="America/New_York"
            ): 218.4199981689453,
            Timestamp(
                "2026-08-21 10:30:00-0400", tz="America/New_York"
            ): 214.64990234375,
            Timestamp(
                "2026-08-21 11:30:00-0400", tz="America/New_York"
            ): 215.82000732421875,
            Timestamp(
                "2026-08-21 12:30:00-0400", tz="America/New_York"
            ): 215.67010498046875,
            Timestamp(
                "2026-08-21 13:30:00-0400", tz="America/New_York"
            ): 215.0850067138672,
            Timestamp(
                "2026-08-21 14:30:00-0400", tz="America/New_York"
            ): 215.36000061035156,
            Timestamp(
                "2026-08-21 15:30:00-0400", tz="America/New_York"
            ): 214.8800048828125,
        },
        "High": {
            Timestamp(
                "2026-08-17 09:30:00-0400", tz="America/New_York"
            ): 227.1699981689453,
            Timestamp("2026-08-17 10:30:00-0400", tz="America/New_York"): 227.75,
            Timestamp(
                "2026-08-17 11:30:00-0400", tz="America/New_York"
            ): 227.9199981689453,
            Timestamp(
                "2026-08-17 12:30:00-0400", tz="America/New_York"
            ): 227.2100067138672,
            Timestamp(
                "2026-08-17 13:30:00-0400", tz="America/New_York"
            ): 226.27999877929688,
            Timestamp(
                "2026-08-17 14:30:00-0400", tz="America/New_York"
            ): 225.9149932861328,
            Timestamp(
                "2026-08-17 15:30:00-0400", tz="America/New_York"
            ): 226.00999450683594,
            Timestamp(
                "2026-08-18 09:30:00-0400", tz="America/New_York"
            ): 221.63999938964844,
            Timestamp(
                "2026-08-18 10:30:00-0400", tz="America/New_York"
            ): 220.52999877929688,
            Timestamp(
                "2026-08-18 11:30:00-0400", tz="America/New_York"
            ): 220.36000061035156,
            Timestamp(
                "2026-08-18 12:30:00-0400", tz="America/New_York"
            ): 220.4499969482422,
            Timestamp(
                "2026-08-18 13:30:00-0400", tz="America/New_York"
            ): 220.50999450683594,
            Timestamp(
                "2026-08-18 14:30:00-0400", tz="America/New_York"
            ): 220.19000244140625,
            Timestamp(
                "2026-08-18 15:30:00-0400", tz="America/New_York"
            ): 220.02999877929688,
            Timestamp(
                "2026-08-19 09:30:00-0400", tz="America/New_York"
            ): 222.8699951171875,
            Timestamp(
                "2026-08-19 10:30:00-0400", tz="America/New_York"
            ): 219.9499969482422,
            Timestamp(
                "2026-08-19 11:30:00-0400", tz="America/New_York"
            ): 220.64999389648438,
            Timestamp(
                "2026-08-19 12:30:00-0400", tz="America/New_York"
            ): 219.52490234375,
            Timestamp(
                "2026-08-19 13:30:00-0400", tz="America/New_York"
            ): 219.77999877929688,
            Timestamp(
                "2026-08-19 14:30:00-0400", tz="America/New_York"
            ): 219.99000549316406,
            Timestamp(
                "2026-08-19 15:30:00-0400", tz="America/New_York"
            ): 219.84500122070312,
            Timestamp(
                "2026-08-20 09:30:00-0400", tz="America/New_York"
            ): 219.86000061035156,
            Timestamp(
                "2026-08-20 10:30:00-0400", tz="America/New_York"
            ): 218.97000122070312,
            Timestamp(
                "2026-08-20 11:30:00-0400", tz="America/New_York"
            ): 216.9600067138672,
            Timestamp(
                "2026-08-20 12:30:00-0400", tz="America/New_York"
            ): 217.97999572753906,
            Timestamp("2026-08-20 13:30:00-0400", tz="America/New_York"): 217.0,
            Timestamp(
                "2026-08-20 14:30:00-0400", tz="America/New_York"
            ): 217.4600067138672,
            Timestamp(
                "2026-08-20 15:30:00-0400", tz="America/New_York"
            ): 217.44000244140625,
            Timestamp(
                "2026-08-21 09:30:00-0400", tz="America/New_York"
            ): 218.74000549316406,
            Timestamp(
                "2026-08-21 10:30:00-0400", tz="America/New_York"
            ): 215.9499969482422,
            Timestamp(
                "2026-08-21 11:30:00-0400", tz="America/New_York"
            ): 217.02499389648438,
            Timestamp(
                "2026-08-21 12:30:00-0400", tz="America/New_York"
            ): 215.82000732421875,
            Timestamp(
                "2026-08-21 13:30:00-0400", tz="America/New_York"
            ): 216.12680053710938,
            Timestamp(
                "2026-08-21 14:30:00-0400", tz="America/New_York"
            ): 215.4600067138672,
            Timestamp(
                "2026-08-21 15:30:00-0400", tz="America/New_York"
            ): 215.47999572753906,
        },
        "Low": {
            Timestamp(
                "2026-08-17 09:30:00-0400", tz="America/New_York"
            ): 225.02999877929688,
            Timestamp(
                "2026-08-17 10:30:00-0400", tz="America/New_York"
            ): 225.61000061035156,
            Timestamp(
                "2026-08-17 11:30:00-0400", tz="America/New_York"
            ): 226.71200561523438,
            Timestamp(
                "2026-08-17 12:30:00-0400", tz="America/New_York"
            ): 225.8300018310547,
            Timestamp(
                "2026-08-17 13:30:00-0400", tz="America/New_York"
            ): 225.38999938964844,
            Timestamp(
                "2026-08-17 14:30:00-0400", tz="America/New_York"
            ): 225.35000610351562,
            Timestamp(
                "2026-08-17 15:30:00-0400", tz="America/New_York"
            ): 224.86000061035156,
            Timestamp(
                "2026-08-18 09:30:00-0400", tz="America/New_York"
            ): 218.8350067138672,
            Timestamp(
                "2026-08-18 10:30:00-0400", tz="America/New_York"
            ): 218.69020080566406,
            Timestamp(
                "2026-08-18 11:30:00-0400", tz="America/New_York"
            ): 219.32000732421875,
            Timestamp(
                "2026-08-18 12:30:00-0400", tz="America/New_York"
            ): 219.38999938964844,
            Timestamp(
                "2026-08-18 13:30:00-0400", tz="America/New_York"
            ): 219.2220001220703,
            Timestamp(
                "2026-08-18 14:30:00-0400", tz="America/New_York"
            ): 219.1300048828125,
            Timestamp(
                "2026-08-18 15:30:00-0400", tz="America/New_York"
            ): 218.9199981689453,
            Timestamp(
                "2026-08-19 09:30:00-0400", tz="America/New_York"
            ): 216.75999450683594,
            Timestamp(
                "2026-08-19 10:30:00-0400", tz="America/New_York"
            ): 217.9600067138672,
            Timestamp(
                "2026-08-19 11:30:00-0400", tz="America/New_York"
            ): 218.64010620117188,
            Timestamp(
                "2026-08-19 12:30:00-0400", tz="America/New_York"
            ): 218.75999450683594,
            Timestamp(
                "2026-08-19 13:30:00-0400", tz="America/New_York"
            ): 218.6300048828125,
            Timestamp(
                "2026-08-19 14:30:00-0400", tz="America/New_York"
            ): 219.14999389648438,
            Timestamp(
                "2026-08-19 15:30:00-0400", tz="America/New_York"
            ): 217.0399932861328,
            Timestamp(
                "2026-08-20 09:30:00-0400", tz="America/New_York"
            ): 216.7100067138672,
            Timestamp(
                "2026-08-20 10:30:00-0400", tz="America/New_York"
            ): 216.63999938964844,
            Timestamp(
                "2026-08-20 11:30:00-0400", tz="America/New_York"
            ): 215.66000366210938,
            Timestamp(
                "2026-08-20 12:30:00-0400", tz="America/New_York"
            ): 216.1999969482422,
            Timestamp(
                "2026-08-20 13:30:00-0400", tz="America/New_York"
            ): 216.17999267578125,
            Timestamp(
                "2026-08-20 14:30:00-0400", tz="America/New_York"
            ): 216.47000122070312,
            Timestamp(
                "2026-08-20 15:30:00-0400", tz="America/New_York"
            ): 216.35499572753906,
            Timestamp(
                "2026-08-21 09:30:00-0400", tz="America/New_York"
            ): 214.5850067138672,
            Timestamp("2026-08-21 10:30:00-0400", tz="America/New_York"): 214.5,
            Timestamp(
                "2026-08-21 11:30:00-0400", tz="America/New_York"
            ): 215.4300994873047,
            Timestamp(
                "2026-08-21 12:30:00-0400", tz="America/New_York"
            ): 214.63499450683594,
            Timestamp(
                "2026-08-21 13:30:00-0400", tz="America/New_York"
            ): 214.89999389648438,
            Timestamp(
                "2026-08-21 14:30:00-0400", tz="America/New_York"
            ): 214.72500610351562,
            Timestamp(
                "2026-08-21 15:30:00-0400", tz="America/New_York"
            ): 214.57000732421875,
        },
        "Close": {
            Timestamp(
                "2026-08-17 09:30:00-0400", tz="America/New_York"
            ): 226.60000610351562,
            Timestamp(
                "2026-08-17 10:30:00-0400", tz="America/New_York"
            ): 227.44000244140625,
            Timestamp(
                "2026-08-17 11:30:00-0400", tz="America/New_York"
            ): 227.0303955078125,
            Timestamp(
                "2026-08-17 12:30:00-0400", tz="America/New_York"
            ): 225.9199981689453,
            Timestamp(
                "2026-08-17 13:30:00-0400", tz="America/New_York"
            ): 225.52999877929688,
            Timestamp("2026-08-17 14:30:00-0400", tz="America/New_York"): 225.5,
            Timestamp(
                "2026-08-17 15:30:00-0400", tz="America/New_York"
            ): 225.0500030517578,
            Timestamp(
                "2026-08-18 09:30:00-0400", tz="America/New_York"
            ): 219.97000122070312,
            Timestamp(
                "2026-08-18 10:30:00-0400", tz="America/New_York"
            ): 219.53970336914062,
            Timestamp(
                "2026-08-18 11:30:00-0400", tz="America/New_York"
            ): 219.52999877929688,
            Timestamp(
                "2026-08-18 12:30:00-0400", tz="America/New_York"
            ): 220.3300018310547,
            Timestamp(
                "2026-08-18 13:30:00-0400", tz="America/New_York"
            ): 219.93499755859375,
            Timestamp(
                "2026-08-18 14:30:00-0400", tz="America/New_York"
            ): 219.24000549316406,
            Timestamp(
                "2026-08-18 15:30:00-0400", tz="America/New_York"
            ): 219.8000030517578,
            Timestamp(
                "2026-08-19 09:30:00-0400", tz="America/New_York"
            ): 218.14999389648438,
            Timestamp(
                "2026-08-19 10:30:00-0400", tz="America/New_York"
            ): 219.27000427246094,
            Timestamp(
                "2026-08-19 11:30:00-0400", tz="America/New_York"
            ): 219.4001007080078,
            Timestamp(
                "2026-08-19 12:30:00-0400", tz="America/New_York"
            ): 218.9813995361328,
            Timestamp(
                "2026-08-19 13:30:00-0400", tz="America/New_York"
            ): 219.16000366210938,
            Timestamp(
                "2026-08-19 14:30:00-0400", tz="America/New_York"
            ): 219.53500366210938,
            Timestamp(
                "2026-08-19 15:30:00-0400", tz="America/New_York"
            ): 217.64999389648438,
            Timestamp("2026-08-20 09:30:00-0400", tz="America/New_York"): 217.5,
            Timestamp(
                "2026-08-20 10:30:00-0400", tz="America/New_York"
            ): 216.8300018310547,
            Timestamp(
                "2026-08-20 11:30:00-0400", tz="America/New_York"
            ): 216.83999633789062,
            Timestamp(
                "2026-08-20 12:30:00-0400", tz="America/New_York"
            ): 216.2949981689453,
            Timestamp(
                "2026-08-20 13:30:00-0400", tz="America/New_York"
            ): 216.9199981689453,
            Timestamp(
                "2026-08-20 14:30:00-0400", tz="America/New_York"
            ): 217.4499969482422,
            Timestamp(
                "2026-08-20 15:30:00-0400", tz="America/New_York"
            ): 217.0500030517578,
            Timestamp(
                "2026-08-21 09:30:00-0400", tz="America/New_York"
            ): 214.6446075439453,
            Timestamp(
                "2026-08-21 10:30:00-0400", tz="America/New_York"
            ): 215.8300018310547,
            Timestamp(
                "2026-08-21 11:30:00-0400", tz="America/New_York"
            ): 215.67999267578125,
            Timestamp(
                "2026-08-21 12:30:00-0400", tz="America/New_York"
            ): 215.0800018310547,
            Timestamp(
                "2026-08-21 13:30:00-0400", tz="America/New_York"
            ): 215.3699951171875,
            Timestamp(
                "2026-08-21 14:30:00-0400", tz="America/New_York"
            ): 214.8800048828125,
            Timestamp("2026-08-21 15:30:00-0400", tz="America/New_York"): 214.75,
        },
        "Volume": {
            Timestamp("2026-08-17 09:30:00-0400", tz="America/New_York"): 19035868,
            Timestamp("2026-08-17 10:30:00-0400", tz="America/New_York"): 15492978,
            Timestamp("2026-08-17 11:30:00-0400", tz="America/New_York"): 9952374,
            Timestamp("2026-08-17 12:30:00-0400", tz="America/New_York"): 6804284,
            Timestamp("2026-08-17 13:30:00-0400", tz="America/New_York"): 6431278,
            Timestamp("2026-08-17 14:30:00-0400", tz="America/New_York"): 5615571,
            Timestamp("2026-08-17 15:30:00-0400", tz="America/New_York"): 8321416,
            Timestamp("2026-08-18 09:30:00-0400", tz="America/New_York"): 26756702,
            Timestamp("2026-08-18 10:30:00-0400", tz="America/New_York"): 13264389,
            Timestamp("2026-08-18 11:30:00-0400", tz="America/New_York"): 8440865,
            Timestamp("2026-08-18 12:30:00-0400", tz="America/New_York"): 7609414,
            Timestamp("2026-08-18 13:30:00-0400", tz="America/New_York"): 7081084,
            Timestamp("2026-08-18 14:30:00-0400", tz="America/New_York"): 7061411,
            Timestamp("2026-08-18 15:30:00-0400", tz="America/New_York"): 12278943,
            Timestamp("2026-08-19 09:30:00-0400", tz="America/New_York"): 25906631,
            Timestamp("2026-08-19 10:30:00-0400", tz="America/New_York"): 11630304,
            Timestamp("2026-08-19 11:30:00-0400", tz="America/New_York"): 9384406,
            Timestamp("2026-08-19 12:30:00-0400", tz="America/New_York"): 6246936,
            Timestamp("2026-08-19 13:30:00-0400", tz="America/New_York"): 6294469,
            Timestamp("2026-08-19 14:30:00-0400", tz="America/New_York"): 6058312,
            Timestamp("2026-08-19 15:30:00-0400", tz="America/New_York"): 11947374,
            Timestamp("2026-08-20 09:30:00-0400", tz="America/New_York"): 19258361,
            Timestamp("2026-08-20 10:30:00-0400", tz="America/New_York"): 11502198,
            Timestamp("2026-08-20 11:30:00-0400", tz="America/New_York"): 8087364,
            Timestamp("2026-08-20 12:30:00-0400", tz="America/New_York"): 8404406,
            Timestamp("2026-08-20 13:30:00-0400", tz="America/New_York"): 5010054,
            Timestamp("2026-08-20 14:30:00-0400", tz="America/New_York"): 6606937,
            Timestamp("2026-08-20 15:30:00-0400", tz="America/New_York"): 8167918,
            Timestamp("2026-08-21 09:30:00-0400", tz="America/New_York"): 32276874,
            Timestamp("2026-08-21 10:30:00-0400", tz="America/New_York"): 10991780,
            Timestamp("2026-08-21 11:30:00-0400", tz="America/New_York"): 9577215,
            Timestamp("2026-08-21 12:30:00-0400", tz="America/New_York"): 7493432,
            Timestamp("2026-08-21 13:30:00-0400", tz="America/New_York"): 7216980,
            Timestamp("2026-08-21 14:30:00-0400", tz="America/New_York"): 6506839,
            Timestamp("2026-08-21 15:30:00-0400", tz="America/New_York"): 8523398,
        },
    }
    df = pd.DataFrame.from_dict(raw_data, orient="columns")
    df.index = pd.to_datetime(df.index)
    return df

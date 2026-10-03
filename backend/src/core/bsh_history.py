from datetime import datetime, timedelta

import pandas as pd
import numpy as np

from src.core.interpretation_methods import additive_method, majority_vote_method, median_method, percentage_method_values
from src.core.calculate_strategies_methods import calculate_strategies, calculate_signals, interpret_strategies_result



def _remove_days(df: pd.DataFrame, days: int) -> pd.DataFrame:
    """
    Filter data by removing rows older than N days.
    Works with Datetime in UNIX milliseconds.
    """
    if df["Datetime"].dtype != "datetime64[ns]":
        df = df.copy()
        df["Datetime"] = pd.to_datetime(df["Datetime"], unit="ms")

    cutoff_date = datetime.now() - timedelta(days=days)
    return df[df["Datetime"] < cutoff_date]



def calculate_history_data(data: pd.DataFrame, shape: int) -> np.ndarray:
    """
    Calculate historical trading signals for given data.
    """
    if data["Datetime"].dtype != "datetime64[ns]":
        data = data.copy()
        data["Datetime"] = pd.to_datetime(data["Datetime"], unit="ms")

    previous_day = None
    array = np.zeros((shape, 4, 3))

    for i in range(shape):
        filtered = _remove_days(data, i)

        if filtered.empty:
            continue

        last_dt = filtered.iloc[-1]["Datetime"]

        if last_dt == previous_day:
            continue
        else:
            previous_day = last_dt

        strategies = calculate_strategies(data=filtered)

        signals_buy, signals_sell, signals_hold = (
            calculate_signals(
                data=filtered, strategies=strategies
            )
        )

        interpret_strategies_result(
            signals_buy=signals_buy,
            signals_sell=signals_sell,
            signals_hold=signals_hold,
        )

        array[i][0] = percentage_method_values(
            signals_buy, signals_sell, signals_hold
        )
        array[i][1] = additive_method(
            signals_buy, signals_sell, signals_hold
        )
        array[i][2] = majority_vote_method(
            signals_buy, signals_sell, signals_hold
        )
        array[i][3] = median_method(
            signals_buy, signals_sell, signals_hold
        )

    mask = np.all(array == 0, axis=(1, 2))
    array = array[~mask]

    return array[::-1], array.shape[0]

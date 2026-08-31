"""
This file contains tests for the calculate_strategies_methods module.
"""

from typing import cast

import pytest
import numpy as np
import pandas as pd

from src.core import calculate_strategies_methods


# pylint: disable=protected-access
def test_calculate_strategies_sma(raw_stock_data) -> None:
    """
    Test for calculate_strategies_sma function.
    :param raw_stock_data: sample market data
    :type raw_stock_data: pd.DataFrame
    """
    output = calculate_strategies_methods._calculate_strategies_sma(raw_stock_data)
    sma10_data = cast(pd.Series, output["sma_10_data"])
    sma20_data = cast(pd.Series, output["sma_20_data"])
    sma30_data = cast(pd.Series, output["sma_30_data"])
    assert pytest.approx(output["sma_10"], rel=1e-6) == 215.7654602050781
    assert pytest.approx(sma10_data.iloc[-1], rel=1e-6) == 215.7654602050781
    assert pytest.approx(output["sma_20"], rel=1e-6) == 216.95580520629883
    assert pytest.approx(sma20_data.iloc[-1], rel=1e-6) == 216.95580520629883
    assert pytest.approx(output["sma_30"], rel=1e-6) == 218.20536041259766
    assert pytest.approx(sma30_data.iloc[-1], rel=1e-6) == 218.20536041259766


# pylint: disable=protected-access
def test_calculate_strategies_bb(raw_stock_data) -> None:
    """
    Test for calculate_strategies_bb function.
    :param raw_stock_data: sample market data
    :type raw_stock_data: pd.DataFrame
    """
    output = calculate_strategies_methods._calculate_strategies_bb(raw_stock_data)
    assert pytest.approx(output["bb_upper"].iloc[-1], rel=1e-6) == 220.26088702307322
    assert pytest.approx(output["bb_lower"].iloc[-1], rel=1e-6) == 213.65072338952444
    assert pytest.approx(output["bb_std"].iloc[-1], rel=1e-6) == 1.652540908387189


# pylint: disable=protected-access
def test_calculate_strategies_macd(raw_stock_data) -> None:
    """
    Test for calculate_strategies_macd function.
    :param raw_stock_data: sample market data
    :type raw_stock_data: pd.DataFrame
    """
    output = calculate_strategies_methods._calculate_strategies_macd(raw_stock_data)
    macd_line = cast(pd.Series, output["macd_line"])
    macd_signal_line = cast(pd.Series, output["macd_signal_line"])
    assert pytest.approx(macd_line.iloc[-1], rel=1e-6) == -1.8388570245663232
    assert pytest.approx(macd_signal_line.iloc[-1], rel=1e-6) == -1.8949592956946755
    assert pytest.approx(output["macd_hist"][-1], rel=1e-6) == 0.05610227112835231


# pylint: disable=protected-access
def test_calculate_strategies_adx(raw_stock_data) -> None:
    """
    Test for calculate_strategies_adx function.
    :param raw_stock_data: sample market data
    :type raw_stock_data: pd.DataFrame
    """
    output = calculate_strategies_methods._calculate_strategies_adx(raw_stock_data)
    assert pytest.approx(output["adx"].iloc[-1], rel=1e-6) == 26.341779845201575
    assert pytest.approx(output["adx_pdi"].iloc[-1], rel=1e-6) == 13.005467071507226
    assert pytest.approx(output["adx_ndi"].iloc[-1], rel=1e-6) == 21.99661244130494


# pylint: disable=protected-access
def test_calculate_strategies_rsi(raw_stock_data) -> None:
    """
    Test for calculate_strategies_rsi function.
    :param raw_stock_data: sample market data
    :type raw_stock_data: pd.DataFrame
    """
    output = calculate_strategies_methods._calculate_strategies_rsi(raw_stock_data)
    assert pytest.approx(output["rsi"].iloc[-1], rel=1e-6) == 32.27551321124943


def test_calculate_strategies(raw_stock_data) -> None:
    """
    Test for calculate_strategies function.
    :param raw_stock_data: sample market data
    :type raw_stock_data: pd.DataFrame
    """
    output = calculate_strategies_methods.calculate_strategies(raw_stock_data)
    assert isinstance(output, dict)


def test_calculate_signals(raw_stock_data, strategies_values) -> None:
    """
    Test for calculate_signals function.
    :param raw_stock_data: sample market data
    :type raw_stock_data: pd.DataFrame
    :param strategies_values: sample strategies values
    :type strategies_values: dict
    """
    result = (
        np.array([0, 1, 0, 1, 0, 0, 0]),
        np.array([0.96465, 0, 0, 0, 0.37917, 0, 0]),
        np.array([0.03535, 0, 1, 0, 0.62083, 1, 1]),
    )
    output = calculate_strategies_methods.calculate_signals(
        raw_stock_data, strategies_values
    )
    assert np.array_equal(output, result)


def test_interpret_strategies_result() -> None:
    """
    Test for interpret_strategies_result function.
    """
    result = ("HOLD", "HOLD", "HOLD")
    output = calculate_strategies_methods.interpret_strategies_result(
        np.array([0, 1, 0, 1, 0, 0, 0]),
        np.array([0.96465, 0, 0, 0, 0.37917, 0, 0]),
        np.array([0.03535, 0, 1, 0, 0.62083, 1, 1]),
    )
    assert np.array_equal(output, result)


def test_parse_expert_signals() -> None:
    """
    Test for interpret_strategies_result function.
    """
    result = {
        "sma": "SELL",
        "rsi": "BUY",
        "bb": "HOLD",
        "macd": "BUY",
        "adx": "HOLD",
        "volume": "HOLD",
    }
    output = calculate_strategies_methods.parse_expert_signals(
        np.array([0, 1, 0, 1, 0, 0, 0]),
        np.array([0.96465, 0, 0, 0, 0.37917, 0, 0]),
        np.array([0.03535, 0, 1, 0, 0.62083, 1, 1]),
    )
    assert output == result

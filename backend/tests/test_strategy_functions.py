"""
This file contains tests for the strategy_funcions module.
"""

import pytest
import numpy as np
import pandas as pd

from src.core import strategy_functions


@pytest.mark.parametrize(
    "rsi, result",
    [
        (20, np.array([[0], [0], [1]])),
        (50, np.array([[0], [0], [1]])),
        (33.5, np.array([[1], [0], [0]])),
    ],
)
def test_calculate_signals_rsi(rsi, result) -> None:
    """
    Tests fot calculate_signals_rsi function.
    :param rsi: rsi value
    :type rsi: np.ndarray
    :param result: expected output
    :type result: np.ndarray
    """
    signals = np.zeros((3, 1))
    strategy_functions.calculate_signals_rsi(rsi, 0, signals)
    np.testing.assert_array_equal(signals, result)


@pytest.mark.parametrize(
    "sma_n, sma_m, result",
    [
        (10, 15, np.array([[0], [1], [0]])),
        (4, 44, np.array([[0], [1], [0]])),
        (25, 11, np.array([[1], [0], [0]])),
    ],
)
def test_calculate_signals_sma(sma_n, sma_m, result) -> None:
    """
    Test for calculate_singals_sma function.
    :param sma_n: sma_n value
    :type sma_n: float
    :param sma_m: sma_m value
    :type sma_m: float
    :param result: expected output
    :type result: np.ndarray
    """
    signals = np.zeros((3, 1))
    strategy_functions.calculate_signals_sma(sma_n, sma_m, 0, signals)
    np.testing.assert_array_equal(signals, result)


@pytest.mark.parametrize(
    "bb_up_line, bb_down_line, result",
    [
        (10.3, 4.4, np.array([[0], [1], [0]])),
        (15.3, 2.4, np.array([[0], [1], [0]])),
        (8.4, 7.5, np.array([[0], [1], [0]])),
    ],
)
def test_calculate_signals_bollinger_bands(
    raw_stock_data, bb_up_line, bb_down_line, result
) -> None:
    """
    Test for calculate_signals_bollinger_bands function
    :param raw_stock_data: sample market data
    :type raw_stock_data: pd.DataFrame
    :param bb_up_line: upper bollinger band value
    :type bb_up_line: float
    :param bb_down_line: lower bollinger band value
    :type bb_down_line: float
    :param result: expected output
    :type result: np.ndarray
    """
    signals = np.zeros((3, 1))
    strategy_functions.calculate_signals_bollinger_bands(
        raw_stock_data, bb_up_line, bb_down_line, 0, signals
    )
    np.testing.assert_array_equal(signals, result)


@pytest.mark.parametrize(
    "hist, result",
    [
        (np.array([1, 2.4, 3, 4.4, 5]), np.array([[0.35135], [0], [0.64865]])),
        (np.array([5, 4, 3, -2.5, -1]), np.array([[0], [0.14286], [0.85714]])),
        (np.array([2, 1.5, 0, -4, -9.5]), np.array([[0], [1], [0]])),
    ],
)
def test_calculate_signals_macd(hist, result) -> None:
    """
    Test for calculate_signals_macd function
    :param hist: last five histogram values
    :type hist: np.ndarray
    :param result: expected output
    :type result: np.ndarray
    """
    signals = np.zeros((3, 1))
    strategy_functions.calculate_signals_macd(hist, 0, signals)
    np.testing.assert_array_equal(signals, result)


@pytest.mark.parametrize(
    "adx, pdm, ndm, result",
    [
        (pd.Series([20]), pd.Series([5]), pd.Series([-5]), np.array([[0], [0], [1]])),
        (pd.Series([55]), pd.Series([3]), pd.Series([6]), np.array([[0], [1], [0]])),
        (
            pd.Series([89]),
            pd.Series([-2.3]),
            pd.Series([4.3]),
            np.array([[0], [1], [0]]),
        ),
    ],
)
def test_calculate_signals_adx(adx, pdm, ndm, result) -> None:
    """
    Test for calculate_signals_adx function.
    :param adx: adx value
    :type adx: pd.Series
    :param pdm: pdm value
    :type pdm: pd.Series
    :param ndm: ndm value
    :type ndm: pd.Series
    :param result: excepted output
    :type result: np.ndarray
    """
    signals = np.zeros((3, 1))
    strategy_functions.calculate_signals_adx(adx, pdm, ndm, 0, signals)
    np.testing.assert_array_equal(signals, result)


def test_calculate_signals_volume(raw_stock_data) -> None:
    """
    Test for calculate_signals_volume function.
    :param raw_stock_data: sample market data
    :type raw_stock_data: pd.DataFrame
    """
    signals = np.zeros((3, 1))
    strategy_functions.calculate_signals_volume(raw_stock_data, 0, signals)
    np.testing.assert_array_equal(signals, np.array([[0], [0], [1]]))

"""
This file contains tests for the interpretation_methods module.
"""

import pytest
import numpy as np

from src.core import interpretation_methods


@pytest.mark.parametrize(
    "buy_data, sell_data, hold_data, result",
    [
        (
            np.array([1, 0.1, 0]),
            np.array([0.5, 0.4, 0]),
            np.array([0.9, 0, 0.1]),
            np.array([1, 0, 0]),
        ),
        (
            np.array([0, 0.7, 0.4]),
            np.array([0, 1, 0.4]),
            np.array([0, 0, 0.2]),
            np.array([0, 1, 0]),
        ),
        (
            np.array([0, 0, 1]),
            np.array([0, 0, 0.9]),
            np.array([1, 0, 0.1]),
            np.array([0, 0, 1]),
        ),
    ],
)
def test_additive_method(buy_data, sell_data, hold_data, result) -> None:
    """
    Tests additive_method using predefined input arrays and expected output.
    :param buy_data: Input buy signal array.
    :type buy_data: np.ndarray
    :param sell_data: Input sell signal array.
    :type sell_data: np.ndarray
    :param hold_data: Input hold signal array.
    :type hold_data: np.ndarray
    :param result: Expected aggregated signal.
    :type result: np.ndarray
    """
    output = interpretation_methods.additive_method(buy_data, sell_data, hold_data)
    assert np.array_equal(output, result)


@pytest.mark.parametrize(
    "buy_data, sell_data, hold_data, result",
    [
        (
            np.array([1, 0.1, 0.2]),
            np.array([0.5, 0.4, 0]),
            np.array([0.9, 0, 0.1]),
            np.array([1, 0, 0]),
        ),
        (
            np.array([0, 0.7, 0.4]),
            np.array([0.5, 1, 0.4]),
            np.array([0, 0, 0.2]),
            np.array([0, 1, 0]),
        ),
        (
            np.array([0, 0, 1]),
            np.array([0, 0, 0.9]),
            np.array([1, 12, 0.1]),
            np.array([0, 0, 1]),
        ),
    ],
)
def test_majority_vote_method(buy_data, sell_data, hold_data, result) -> None:
    """
    Tests majority_method using predefined input arrays and expected output.
    :param buy_data: Input buy signal array.
    :type buy_data: np.ndarray
    :param sell_data: Input sell signal array.
    :type sell_data: np.ndarray
    :param hold_data: Input hold signal array.
    :type hold_data: np.ndarray
    :param result: Expected aggregated signal.
    :type result: np.ndarray
    """
    output = interpretation_methods.majority_vote_method(buy_data, sell_data, hold_data)
    assert np.array_equal(output, result)


@pytest.mark.parametrize(
    "buy_data, sell_data, hold_data, result",
    [
        (
            np.array([1, 0.1, 0.7]),
            np.array([0.5, 0.4, 0]),
            np.array([0.9, 0, 0.1]),
            np.array([1, 0, 0]),
        ),
        (
            np.array([0, 0.7, 0.4]),
            np.array([0.5, 1, 0.4]),
            np.array([0, 0, 0.2]),
            np.array([0, 1, 0]),
        ),
        (
            np.array([0, 0, 1]),
            np.array([0, 0, 0.9]),
            np.array([1, 12, 0.1]),
            np.array([0, 0, 1]),
        ),
    ],
)
def test_median_method(buy_data, sell_data, hold_data, result) -> None:
    """
    Tests median_method using predefined input arrays and expected output.
    :param buy_data: Input buy signal array.
    :type buy_data: np.ndarray
    :param sell_data: Input sell signal array.
    :type sell_data: np.ndarray
    :param hold_data: Input hold signal array.
    :type hold_data: np.ndarray
    :param result: Expected aggregated signal.
    :type result: np.ndarray
    """
    output = interpretation_methods.median_method(buy_data, sell_data, hold_data)
    assert np.array_equal(output, result)

"""
This file contains tests for the interpretation_methods module.
"""

import pytest

from src.core import strategy_methods


@pytest.mark.parametrize(
    "peroid, result",
    [(14, 216.07997131347656), (10, 215.7654602050781), (6, 215.26499938964844)],
)
def test_calculate_sma(raw_stock_data, peroid, result) -> None:
    """
    Test for calculate_sma function.
    :param raw_stock_data: sample market data.
    :type raw_stock_data: pd.DataFram.
    :param peroid: sma period.
    :type peroid: int.
    :param result: function output.
    :type result: float
    """
    output = strategy_methods.calculate_sma(raw_stock_data, peroid)
    assert pytest.approx(output[0], rel=1e-6) == result


@pytest.mark.parametrize(
    "period, result",
    [
        (14, 32.27551321124943),
        (10, 38.64935216345345),
        (6, 51.85199088349645),
    ],
)
def test_calculate_rsi(raw_stock_data, period, result) -> None:
    """
    Test for calculate_rsi function.
    :param raw_stock_data: sample market data.
    :type raw_stock_data: pd.DataFram.
    :param peroid: rsi period.
    :type peroid: int.
    :param result: function output.
    :type result: float
    """
    output = strategy_methods.calculate_rsi(raw_stock_data, period)
    assert output.iloc[-1] == pytest.approx(result, rel=1e-6)


@pytest.mark.parametrize(
    "period, multiplier, result",
    [
        (20, 2, 1.652540908387189),
        (15, 3, 1.0697998270848643),
        (25, 4, 1.8309108846647288),
    ],
)
def test_calculate_bollinger_bands(raw_stock_data, period, multiplier, result) -> None:
    """
    Test for callculate_bollinger_bands function.
    :param raw_stock_data: sample market data.
    :type raw_stock_data: pd.DataFrame
    :param period: bb period
    :type period: int
    :param multiplier: multiplier
    :type multiplier: int
    :param result: function output
    :type result: tuple
    """
    output = strategy_methods.calculate_bollinger_bands(
        raw_stock_data, period, multiplier
    )
    assert output[2].iloc[-1] == pytest.approx(result, rel=1e-6)


@pytest.mark.parametrize(
    "short_period, long_period, signal_period, result",
    [
        (12, 26, 9, -1.8388570245663232),
        (10, 22, 12, -1.5740067275906995),
        (8, 15, 7, -0.875838288020077),
    ],
)
def test_calculate_macd(
    raw_stock_data, short_period, long_period, signal_period, result
) -> None:
    """
    Test for calculate_macd function.
    :param raw_stock_data: sample market data
    :type raw_stock_data: pd.DataFrame
    :param short_period: short macd period
    :type short_period: int
    :param long_period: long macd period
    :type long_period: int
    :param signal_period: macd signal period
    :type signal_period: int
    :param result: function output
    :type result: tuple
    """
    output = strategy_methods.calculate_macd(
        raw_stock_data, short_period, long_period, signal_period
    )
    assert output[0].iloc[-1] == pytest.approx(result, rel=1e-6)


@pytest.mark.parametrize(
    "period, result",
    [(14, 32.76791724251611), (10, 26.341779845201575), (18, 26.307307089685782)],
)
def test_calculate_adx(raw_stock_data, period, result) -> None:
    """
    Test for calculate_adx function.
    :param raw_stock_data: sample market data
    :type raw_stock_data: pd.DataFrame
    :param period: adx period
    :type period: int
    :param result: function result
    :type result: tuple
    """
    output = strategy_methods.calculate_adx(raw_stock_data, period)
    assert output[0].iloc[-1] == pytest.approx(result, rel=1e-6)

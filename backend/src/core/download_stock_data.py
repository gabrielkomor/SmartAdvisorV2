import threading

import yfinance as yf
import pandas as pd


def websocket_worker(symbol: str) -> None:
    with yf.WebSocket(verbose=False) as ws:
        ws.subscribe([symbol])
        ws.listen()


def start_live_data_download() -> None:
    thread = threading.Thread(
        target=websocket_worker,
        daemon=True
    )

    thread.start()


def download_data(symbol: str, period: str, interval: str) -> pd.DataFrame:
    data = yf.download(
        symbol,
        period=period,
        interval=interval,
        auto_adjust=False
    )[["Open", "High", "Low", "Close", "Volume"]]

    data.columns = data.columns.get_level_values(0)
    return data


# from calculate_strategies_methods import calculate_strategies, calculate_signals, interpret_strategies_result

# data = download_data(symbol="BTC-USD", period="28d", interval="1h")

# print(data)

# strategies = calculate_strategies(data)
# signals_buy, signals_sell, signals_hold = calculate_signals(data, strategies)
# strategies_result = interpret_strategies_result(signals_buy, signals_sell, signals_hold)

# print(strategies_result)

# print(f"Nasłuchiwanie {SYMBOL}...\n")

# while True:
#     time.sleep(10)

# from strategy_methods import calculate_sma, calculate_rsi, calculate_bollinger_bands, calculate_macd, calculate_adx

# print(f"========= sma: {calculate_sma(data)} \n")
# print(f"========= rsi: {calculate_rsi(data)} \n")
# print(f"========= bb: {calculate_bollinger_bands(data)} \n")
# print(f"========= macd: {calculate_macd(data)} \n")
# print(f"========= adx: {calculate_adx(data)} \n")
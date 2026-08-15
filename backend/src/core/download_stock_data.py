import yfinance as yf
import pandas as pd
import threading
import time


SYMBOL = "BTC-USD"

# def websocket_worker():
#     with yf.WebSocket(verbose=False) as ws:
#         ws.subscribe([SYMBOL])
#         print(ws.listen())


# thread = threading.Thread(
#     target=websocket_worker,
#     daemon=True
# )

# thread.start()

# pd.set_option("display.max_rows", None)

start_download = time.time()

data = yf.download(
    SYMBOL,
    period="28d",
    interval="1h",
    auto_adjust=False
)[["Open", "High", "Low", "Close", "Volume"]]

data.columns = data.columns.get_level_values(0)

end_download = time.time()

print(data)

# print(f"Nasłuchiwanie {SYMBOL}...\n")

# while True:
#     time.sleep(10)

# from strategy_methods import calculate_sma, calculate_rsi, calculate_bollinger_bands, calculate_macd, calculate_adx

# print(f"========= sma: {calculate_sma(data)} \n")
# print(f"========= rsi: {calculate_rsi(data)} \n")
# print(f"========= bb: {calculate_bollinger_bands(data)} \n")
# print(f"========= macd: {calculate_macd(data)} \n")
# print(f"========= adx: {calculate_adx(data)} \n")

from calculate_strategies_methods import calculate_strategies, calculate_signals
import numpy as np

start_calculation = time.time()

strategies = calculate_strategies(data)

signals_buy = np.zeros(7)
signals_sell = np.zeros(7)
signals_hold = np.zeros(7)

signals_buy, signals_sell, signals_hold = calculate_signals(data, strategies)

print("BUY: ",  " ".join(f"{x:6.2f}" for x in signals_buy))
print("SELL: ", " ".join(f"{x:6.2f}" for x in signals_sell))
print("HOLD: ", " ".join(f"{x:6.2f}" for x in signals_hold))

end_calculation = time.time()

print(f"Download data time: {round(end_download - start_download, 5)}")
print(f"Calculation time: {round(end_calculation - start_calculation, 5)}")
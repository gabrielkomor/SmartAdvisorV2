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

data = yf.download(
    SYMBOL,
    period="3d",
    interval="1h",
    auto_adjust=False
)[["Open", "High", "Low", "Close", "Volume"]]

print(data)

# print(f"Nasłuchiwanie {SYMBOL}...\n")

# while True:
#     time.sleep(10)

from strategy_methods import calculate_sma, calculate_rsi, calculate_bollinger_bands, calculate_macd, calculate_adx

print(f"========= sma: {calculate_sma(data)} \n")
# print(f"========= rsi: {calculate_rsi(data)} \n")
# print(f"========= bb: {calculate_bollinger_bands(data)} \n")
# print(f"========= macd: {calculate_macd(data)} \n")
# print(f"========= adx: {calculate_adx(data)} \n")
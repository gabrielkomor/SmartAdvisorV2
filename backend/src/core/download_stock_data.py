import yfinance as yf
import threading
import time
from datetime import datetime


SYMBOL = "NVDA"

prices = []


def on_message(message):
    if "price" in message and message["price"] is not None:
        prices.append({
            "price": float(message["price"]),
            "time": int(message["time"])
        })


def websocket_worker():
    with yf.WebSocket(verbose=False) as ws:
        ws.subscribe([SYMBOL])
        ws.listen(on_message)


thread = threading.Thread(
    target=websocket_worker,
    daemon=True
)

thread.start()


print(f"Nasłuchiwanie {SYMBOL}...\n")


try:
    while True:

        # Czekamy 10 sekund
        time.sleep(60)

        if not prices:
            print("Brak danych.")
            continue

        # Pobieramy ceny z ostatnich 10 sekund
        current_prices = prices.copy()

        # Czyścimy bufor
        prices.clear()

        values = [x["price"] for x in current_prices]

        open_price = values[0]
        high_price = max(values)
        low_price = min(values)
        close_price = values[-1]

        now = datetime.now().strftime("%H:%M:%S")

        print("=" * 50)
        print(f"Czas: {now}")
        print(f"Symbol: {SYMBOL}")
        print(f"Liczba aktualizacji: {len(values)}")
        print()
        print(f"Open:  {open_price}")
        print(f"High:  {high_price}")
        print(f"Low:   {low_price}")
        print(f"Close: {close_price}")


except KeyboardInterrupt:
    print("\nZamykanie programu...")
import { type JSX } from "react";
import { useAppStore } from "../store/useAppStrore";
import { downloadDataAPI } from "../services/downloadDataAPI";

const DownloadData = (): JSX.Element => {
  const actionType = useAppStore((state) => state.actionType);
  const setActionType = useAppStore((state) => state.setActionType);
  const symbol = useAppStore((state) => state.symbol);
  const setSymbol = useAppStore((state) => state.setSymbol);
  const timeFrame = useAppStore((state) => state.timeFrame);
  const setTimeFrame = useAppStore((state) => state.setTimeFrame);
  const timeDelta = useAppStore((state) => state.timeDelta);
  const setTimeDelta = useAppStore((state) => state.setTimeDelta);
  const timeBack = useAppStore((state) => state.timeBack);
  const setTimeBack = useAppStore((state) => state.setTimeBack);
  const setSummary = useAppStore((state) => state.setSummary);
  const setIndicators = useAppStore((state) => state.setIndicators);
  const setMarketData = useAppStore((state) => state.setMarketData);
  const symbols = useAppStore((state) => state.symbols);
  const setSymbols = useAppStore((state) => state.setSymbols);
  const setNewChart = useAppStore((state) => state.setNewChart);
  const downloadStatus = useAppStore((state) => state.downloadStatus);
  const setDownloadStatus = useAppStore((state) => state.setDownloadStatus);

  const setHistBuyLabels = useAppStore((state) => state.setHistBuyLabels);
  const setHistSellLabels = useAppStore((state) => state.setHistSellLabels);
  const setHistHoldLabels = useAppStore((state) => state.setHistHoldLabels);
  const setHistBuyData = useAppStore((state) => state.setHistBuyData);
  const setHistSellData = useAppStore((state) => state.setHistSellData);
  const setHistHoldData = useAppStore((state) => state.setHistHoldData);

  const setLinearBuyLabels = useAppStore((state) => state.setLinearBuyLabels);
  const setLinearSellLabels = useAppStore((state) => state.setLinearSellLabels);
  const setLinearHoldLabels = useAppStore((state) => state.setLinearHoldLabels);
  const setLinearBuyData = useAppStore((state) => state.setLinearBuyData);
  const setLinearSellData = useAppStore((state) => state.setLinearSellData);
  const setLinearHoldData = useAppStore((state) => state.setLinearHoldData);

  const setHistSignalsRow1 = useAppStore((state) => state.setHistSignalsRow1);
  const setHistSignalsRow2 = useAppStore((state) => state.setHistSignalsRow2);
  const setHistSignalsRow3 = useAppStore((state) => state.setHistSignalsRow3);

  const generateLabels = (n: number): number[] => {
    return Array.from({ length: n }, (_, i) => i + 1);
  };

  const handleDownloadData = async (): Promise<void> => {
    try {
      setMarketData([]);
      setNewChart(useAppStore.getState().newChart + 1);

      const result = await downloadDataAPI(
        actionType,
        symbol,
        timeFrame,
        timeDelta,
        timeBack,
      );

      const marketData = result.market_data.market_data.map((item) => ({
        x: item.Datetime,
        o: item.Open,
        h: item.High,
        l: item.Low,
        c: item.Close,
        y: item.Volume,
      }));

      setMarketData(marketData);
      setNewChart(useAppStore.getState().newChart + 1);

      setIndicators([
        { name: "SMA", value: result.experts_signals.sma },
        { name: "RSI", value: result.experts_signals.rsi },
        { name: "BB", value: result.experts_signals.bb },
        { name: "MACD", value: result.experts_signals.macd },
        { name: "ADX", value: result.experts_signals.adx },
        { name: "Volume", value: result.experts_signals.volume },
      ]);

      setSummary([
        {
          name: "Additive",
          value: result.aggregation_signals.additive_method,
        },
        {
          name: "Majority",
          value: result.aggregation_signals.majority_method,
        },
        {
          name: "Median",
          value: result.aggregation_signals.median_method,
        },
      ]);

      setHistBuyLabels(generateLabels(result.history_signals.period));
      setHistSellLabels(generateLabels(result.history_signals.period));
      setHistHoldLabels(generateLabels(result.history_signals.period));
      setHistBuyData(result.history_signals.history.probabilities.buy);
      setHistSellData(result.history_signals.history.probabilities.sell);
      setHistHoldData(result.history_signals.history.probabilities.hold);

      setLinearBuyLabels(generateLabels(result.history_signals.period));
      setLinearSellLabels(generateLabels(result.history_signals.period));
      setLinearHoldLabels(generateLabels(result.history_signals.period));
      setLinearBuyData(result.history_signals.history.probabilities.buy);
      setLinearSellData(result.history_signals.history.probabilities.sell);
      setLinearHoldData(result.history_signals.history.probabilities.hold);

      setHistSignalsRow1(result.history_signals.history.additive.decisions);
      setHistSignalsRow2(result.history_signals.history.majority.decisions);
      setHistSignalsRow3(result.history_signals.history.median.decisions);

      setDownloadStatus("success");

      setTimeout(() => {
        setDownloadStatus("idle");
      }, 1500);
    } catch {
      setDownloadStatus("error");

      setTimeout(() => {
        setDownloadStatus("idle");
      }, 1500);
    }
  };

  return (
    <div className="min-h-full flex flex-col justify-center">
      {/* RADIO BUTTONS */}
      <div className="flex items-center justify-center mt-6 mb-4">
        <div className="join w-4/5 gap-px overflow-hidden rounded-3xl shadow-2xs">
          <input
            className="join-item btn flex-1 text-sm sm:text-xl border-r border-base-300"
            type="radio"
            name="radio_stock"
            aria-label="Forex"
            checked={actionType === "Forex"}
            onChange={() => {
              setActionType("Forex");
              setSymbols([
                "EUR-USD",
                "GBP-USD",
                "USD-JPY",
                "USD-CHF",
                "AUD-USD",
              ]);
              setSymbol("EUR-USD");
            }}
          />
          <input
            className="join-item btn flex-1 text-sm sm:text-xl border-r border-base-300"
            type="radio"
            name="radio_stock"
            aria-label="Stock"
            checked={actionType === "Stock"}
            onChange={() => {
              setActionType("Stock");
              setSymbols(["NVDA", "AAPL", "MSFT", "AMZN", "TSLA"]);
              setSymbol("NVDA");
            }}
          />
          <input
            className="join-item btn flex-1 text-sm sm:text-xl border-r border-base-300"
            type="radio"
            name="radio_stock"
            aria-label="ETF"
            checked={actionType === "ETF"}
            onChange={() => {
              setActionType("ETF");
              setSymbols(["SPY", "QQQ", "VTI", "ARKK", "GLD"]);
              setSymbol("SPY");
            }}
          />
        </div>
      </div>

      {/* SELECT */}
      <div className="divider"></div>

      <div className="flex flex-row w-full mt-4">
        <div className="flex flex-col w-1/2 justify-center items-center">
          <span className="font-bold sm:text-2xl md:text-3xl lg:text-4xl">
            Symbol:
          </span>
          <select
            className="select select-info select-sm sm:select-md lg:select-xl font-bold mt-5 w-3/4 shadow-2xs"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          >
<<<<<<< HEAD
            <option className="font-bold">NVDA</option>
            <option className="font-bold">AMD</option>
            <option className="font-bold">INTC</option>
            <option className="font-bold">BTC-USD</option>
=======
            {symbols.map((s) => (
              <option key={s} className="font-bold">
                {s}
              </option>
            ))}
>>>>>>> develop
          </select>
        </div>

        <div className="divider divider-horizontal"></div>

        <div className="flex flex-col w-1/2 justify-center items-center">
          <span className="font-bold sm:text-2xl md:text-3xl lg:text-4xl">
            Time Frame:
          </span>
          <select
            className="select select-info select-sm sm:select-md lg:select-xl font-bold mt-5 w-3/4 shadow-2xs"
            value={timeFrame}
            onChange={(e) => setTimeFrame(e.target.value)}
          >
            <option className="font-bold">1 m</option>
            <option className="font-bold">2 m</option>
            <option className="font-bold">5 m</option>
            <option className="font-bold">15 m</option>
            <option className="font-bold">30 m</option>
            <option className="font-bold">1 h</option>
            <option className="font-bold">4 h</option>
            <option className="font-bold">1 d</option>
            <option className="font-bold">5 d</option>
          </select>
        </div>
      </div>

      <div className="divider"></div>

      {/* SLIDER */}
      <div className="flex flex-row w-full mt-4">
        <div className="flex flex-col w-1/2 justify-center items-center">
          <span className="font-bold sm:text-2xl md:text-3xl lg:text-4xl">
            Time Delta:
          </span>
          <input
            type="range"
            min={1}
            max={100}
            value={timeDelta}
            onChange={(e) => setTimeDelta(Number(e.target.value))}
            className="range range-primary w-3/4 mt-5 sm:range-md lg:range-xl"
          />
          <div className="flex w-3/4 justify-between mt-2 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
            <span>{1}</span>
            <span>
              {timeDelta} {timeDelta === 1 ? "day" : "days"}
            </span>
            <span>{100}</span>
          </div>
        </div>

        <div className="divider divider-horizontal"></div>

        <div className="flex flex-col w-1/2 justify-center items-center">
          <span className="font-bold sm:text-2xl md:text-3xl lg:text-4xl">
            Time Back:
          </span>
          <input
            type="range"
            min={0}
            max={90}
            value={timeBack}
            onChange={(e) => setTimeBack(Number(e.target.value))}
            className="range range-primary w-3/4 mt-5 sm:range-md lg:range-xl"
          />
          <div className="flex w-3/4 justify-between mt-2 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
            <span>{0}</span>
            <span>
              {timeBack} {timeBack === 1 ? "day" : "days"}
            </span>
            <span>{90}</span>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {/* BUTTON */}
      <div className="flex justify-center">
        <button
          onClick={handleDownloadData}
          className={`
    flex w-2/5 h-14 sm:h-14 md:h-16 lg:h-18 rounded-2xl mt-5 mb-3
    items-center justify-center
    transition-all duration-200
    active:scale-95 font-medium
    text-align-center shadow-xl
    text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer

    ${
      downloadStatus === "success"
        ? "bg-success text-white"
        : downloadStatus === "error"
          ? "bg-error text-white"
          : "bg-primary text-primary-content hover:bg-secondary/50"
    }
  `}
        >
          {downloadStatus === "success"
            ? "Downloaded!"
            : downloadStatus === "error"
              ? "Download Error"
              : "Download Data"}
        </button>
      </div>
    </div>
  );
};

export default DownloadData;

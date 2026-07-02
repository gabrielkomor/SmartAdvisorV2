import { type JSX } from "react";
import { useAppStore } from "../store/useAppStrore";

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
            onChange={() => setActionType("Forex")}
          />
          <input
            className="join-item btn flex-1 text-sm sm:text-xl border-r border-base-300"
            type="radio"
            name="radio_stock"
            aria-label="Stock"
            checked={actionType === "Stock"}
            onChange={() => setActionType("Stock")}
          />
          <input
            className="join-item btn flex-1 text-sm sm:text-xl border-r border-base-300"
            type="radio"
            name="radio_stock"
            aria-label="ETF"
            checked={actionType === "ETF"}
            onChange={() => setActionType("ETF")}
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
            <option className="font-bold">NVDA</option>
            <option className="font-bold">AMD</option>
            <option className="font-bold">INTC</option>
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
            <option className="font-bold">1 M</option>
            <option className="font-bold">1 H</option>
            <option className="font-bold">1 D</option>
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
          className="flex w-2/5 h-14 sm:h-14 md:h-16 lg:h-18 rounded-2xl mt-5 mb-3 items-center justify-center
                      transition-all duration-200 
                      active:scale-95 font-medium
                      bg-primary text-primary-content hover:bg-secondary/50
                      text-align-center shadow-xl
                      text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer"
        >
          Download Data
        </button>
      </div>
    </div>
  );
};

export default DownloadData;

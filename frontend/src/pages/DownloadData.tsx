import { useState, type JSX } from "react";

const DownloadData = (): JSX.Element => {
  const minSliderValue = 1;
  const maxSliderValue = 100;
  const [timeDelta, setTimeDelta] = useState(50);
  const [timeBackward, setTimeBackward] = useState(50);

  return (
    <div className="min-h-full flex flex-col justify-center">
      {/* RADIO BUTTONS */}
      <div className="flex items-center justify-center mt-6 mb-4">
        <div className="join w-4/5 gap-px overflow-hidden rounded-3xl shadow-2xs">
          <input
            className="join-item btn flex-1 text-lg sm:text-xl border-r border-base-300"
            type="radio"
            name="radio_stock"
            aria-label="Forex"
            defaultChecked
          />
          <input
            className="join-item btn flex-1 text-lg sm:text-xl border-r border-base-300"
            type="radio"
            name="radio_stock"
            aria-label="Stock"
          />
          <input
            className="join-item btn flex-1 text-lg sm:text-xl border-r border-base-300"
            type="radio"
            name="radio_stock"
            aria-label="ETF"
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
          <select className="select select-info select-sm sm:select-md lg:select-xl font-bold mt-5 w-3/4 shadow-2xs">
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
          <select className="select select-info select-sm sm:select-md lg:select-xl font-bold mt-5 w-3/4 shadow-2xs">
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
            min={minSliderValue}
            max={maxSliderValue}
            value={timeDelta}
            onChange={(event) => setTimeDelta(Number(event.target.value))}
            className="range range-primary w-3/4 mt-5 sm:range-md lg:range-xl"
          />
          <div className="flex w-3/4 justify-between mt-2 sm:text-sm md:text-base lg:text-lg font-semibold">
            <span>{minSliderValue}</span>
            <span>
              {timeDelta} {timeDelta === 1 ? "day" : "days"}
            </span>
            <span>{maxSliderValue}</span>
          </div>
        </div>

        <div className="divider divider-horizontal"></div>

        <div className="flex flex-col w-1/2 justify-center items-center">
          <span className="font-bold sm:text-2xl md:text-3xl lg:text-4xl">
            Time Backward:
          </span>
          <input
            type="range"
            min={minSliderValue}
            max={maxSliderValue}
            value={timeBackward}
            onChange={(event) => setTimeBackward(Number(event.target.value))}
            className="range range-primary w-3/4 mt-5 sm:range-md lg:range-xl"
          />
          <div className="flex w-3/4 justify-between mt-2 sm:text-sm md:text-base lg:text-lg font-semibold">
            <span>{minSliderValue}</span>
            <span>
              {timeBackward} {timeBackward === 1 ? "day" : "days"}
            </span>
            <span>{maxSliderValue}</span>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {/* BUTTON */}
      <div className="flex justify-center">
        <button
          className="flex w-2/5 h-14 sm:h-14 md:h-16 lg:h-18 rounded-2xl mt-5 items-center justify-center
                      transition-all duration-200 
                      active:scale-95 font-medium
                      bg-primary text-primary-content hover:bg-secondary/50
                      text-align-center shadow-xl
                      text-sm sm:text-base md:text-lg lg:text-xl"
        >
          Download Data
        </button>
      </div>
    </div>
  );
};

export default DownloadData;

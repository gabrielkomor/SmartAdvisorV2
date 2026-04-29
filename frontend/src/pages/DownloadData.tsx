import type { JSX } from "react";

const DownloadData = (): JSX.Element => {
  return (
    <div>
      {/* RADIO BUTTONS */}
      <div className="flex items-center justify-center mt-6">
        <div className="join w-4/5 gap-px overflow-hidden rounded-3xl">
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
          <select className="select select-info select-sm sm:select-md lg:select-xl font-bold mt-5 w-3/4">
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
          <select className="select select-info select-sm sm:select-md lg:select-xl font-bold mt-5 w-3/4">
            <option className="font-bold">1 M</option>
            <option className="font-bold">1 H</option>
            <option className="font-bold">1 D</option>
          </select>
        </div>
      </div>

      <div className="divider"></div>

      {/* SLIDER */}
    </div>
  );
};

export default DownloadData;

import type { JSX } from "react";
import { decisionColor, indicators } from "./layoutDecision";

const LayoutRightIndicators = (): JSX.Element => {
  return (
    <aside
      className="
    w-full lg:w-64
    bg-base-300 p-4 rounded-3xl shadow-xl
    min-h-0 max-h-28 sm:max-h-40 lg:max-h-none
    overflow-y-auto overflow-x-hidden
    flex flex-col justify-start lg:justify-center
  "
    >
      <ul className="flex w-full flex-row flex-wrap content-start gap-2 lg:flex-col lg:flex-nowrap lg:gap-0">
        {indicators.map(({ name, value }) => (
          <li className="w-full sm:w-[calc(50%-0.25rem)] lg:w-full lg:mt-4 rounded-2xl bg-base-200 shadow-2xs p-1">
            <div className="flex w-full items-center gap-2 sm:pd-2 md:p-2.5 lg:p-3">
              <span className="flex-1 text-center font-bold sm:text-sm md:test-xl lg:text-2xl">
                {name}
              </span>
              <button
                className={`btn btn-active rounded-2xl sm:text-xs md:test-sm lg:text-xl font-bold cursor-default w-1/2 sm:h-8 md:h-12 lg:h-16 shrink-0 shadow-xl ${decisionColor(value)}`}
              >
                {value}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LayoutRightIndicators;

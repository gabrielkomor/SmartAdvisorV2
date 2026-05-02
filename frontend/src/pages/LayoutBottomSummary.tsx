import type { JSX } from "react";
import { decisionColor, summary } from "./layoutDecision";

const LayoutBottomSummary = (): JSX.Element => {
  return (
    <div className="flex h-28 w-full items-center bg-base-300 p-2 md:p-1 lg:p-1 rounded-3xl mt-2 shadow-xl overflow-hidden">
      <ul className="grid h-full w-full grid-cols-3 gap-2 sm:gap-3 lg:gap-4 sm:p-1 md:p-2 lg:p-3">
        {summary.map(({ name, value }) => (
          <li
            key={name}
            className="flex w-full flex-col items-center gap-2 rounded-2xl bg-base-200 px-3 py-3 shadow-2xs sm:flex-row sm:gap-0"
          >
            <span className="w-full text-center font-semibold text-sm sm:flex-1 sm:text-base lg:text-xl">
              {name}
            </span>
            <button
              className={`btn w-full rounded-2xl shrink-0 btn-active
              sm:w-1/2 font-bold lg:text-xl md:text-lg sm:text-sm cursor-default shadow-xl
              h-10! sm:h-12! md:h-14! lg:h-15!
              min-h-10! sm:min-h-12! md:min-h-14! lg:min-h-15!
              ${decisionColor(value)}`}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LayoutBottomSummary;

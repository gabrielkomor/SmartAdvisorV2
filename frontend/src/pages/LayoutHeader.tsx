import type { JSX } from "react";

const LayoutHeader = (): JSX.Element => {
  return (
    <aside className="h-16 sm:h-20 bg-primary rounded-3xl shadow-xl mt-2 mx-2 flex items-center justify-center">
      <span className="font-bold text-lg sm:text-2xl lg:text-3xl text-primary-content">
        Smart Advisor V2
      </span>
    </aside>
  );
};

export default LayoutHeader;

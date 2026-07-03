import type { JSX } from "react";
import MainCandeChart from "../components/MainCandeChart";

const CandlestickChart = (): JSX.Element => {
  return (
    <div className="w-full h-full flex flex-col">
      <MainCandeChart />
    </div>
  );
};

export default CandlestickChart;

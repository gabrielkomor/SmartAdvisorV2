import type { JSX } from "react";
import HistoryDecisionsCharts from "../components/HistoryDecisionsCharts";

const HistoryDecisions = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 w-full h-full">
      <HistoryDecisionsCharts />
    </div>
  );
};

export default HistoryDecisions;

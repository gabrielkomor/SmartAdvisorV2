import type { JSX } from "react";
import LinearDecisionsChart from "../components/LinearDecisionsCharts";

const LinearDecisions = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 w-full h-full">
      <LinearDecisionsChart />
    </div>
  );
};

export default LinearDecisions;

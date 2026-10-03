import type { JSX } from "react";

import { Chart } from "react-chartjs-2";
import { useAppStore } from "../store/useAppStrore";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
);
import DecisionRow from "./DecisionRow";

const SignalsHistoryChart = (): JSX.Element => {
  const linearBuyLabels = useAppStore((state) => state.linearBuyLabels);
  const linearBuyData = useAppStore((state) => state.linearBuyData);
  const linearSellData = useAppStore((state) => state.linearSellData);
  const linearHoldData = useAppStore((state) => state.linearHoldData);
  const row1 = useAppStore((state) => state.histSignalsRow1);
  const row2 = useAppStore((state) => state.histSignalsRow2);
  const row3 = useAppStore((state) => state.histSignalsRow3);

  const data = {
    labels: linearBuyLabels,
    datasets: [
      {
        label: "Buy",
        data: linearBuyData,
        borderColor: "rgba(0, 160, 0, 1)",
        backgroundColor: "rgba(0, 160, 0, 0.3)",
        tension: 0.3,
      },
      {
        label: "Sell",
        data: linearSellData,
        borderColor: "rgba(210, 0, 0, 1)",
        backgroundColor: "rgba(210, 0, 0, 0.3)",
        tension: 0.3,
      },
      {
        label: "Hold",
        data: linearHoldData,
        borderColor: "rgba(120, 120, 120, 1)",
        backgroundColor: "rgba(120, 120, 120, 0.3)",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <>
      <div className="h-full">
        <Chart type="line" data={data} options={options} />
      </div>

      <div className="h-1/5">
        <DecisionRow title={"Additive decision method"} decisions={row1} />
        <DecisionRow title={"Majority vote decision method"} decisions={row2} />
        <DecisionRow title={"Median decision method"} decisions={row3} />
      </div>
    </>
  );
};

export default SignalsHistoryChart;

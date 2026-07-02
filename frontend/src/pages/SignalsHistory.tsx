import type { JSX } from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import DecisionRow from "../components/DecisionRow";
import type { Decision } from "../types/decision";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
);

const SignalsHistory = (): JSX.Element => {
  const data = {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: "Buy",
        data: [40, 50, 20, 10, 90],
        borderColor: "rgba(0, 160, 0, 1)",
        backgroundColor: "rgba(0, 160, 0, 0.3)",
        tension: 0.3,
      },
      {
        label: "Sell",
        data: [20, 30, 0, 70, 0],
        borderColor: "rgba(210, 0, 0, 1)",
        backgroundColor: "rgba(210, 0, 0, 0.3)",
        tension: 0.3,
      },
      {
        label: "Hold",
        data: [40, 20, 80, 20, 10],
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

  const row1: Decision[] = ["hold", "hold", "buy", "hold", "sell", "buy"];
  const row2: Decision[] = ["hold", "buy", "sell", "buy", "hold", "buy"];
  const row3: Decision[] = ["buy", "hold", "hold", "sell", "sell", "buy"];

  return (
    <div className="grid grid-cols-1 h-full w-full">
      <div className="h-full">
        <Chart type="line" data={data} options={options} />
      </div>

      <div className="h-1/5">
        <DecisionRow title={"Additive decision method"} decisions={row1} />
        <DecisionRow title={"Majority vote decision method"} decisions={row2} />
        <DecisionRow title={"Median decision method"} decisions={row3} />
      </div>
    </div>
  );
};

export default SignalsHistory;

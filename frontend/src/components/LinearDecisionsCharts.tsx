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

const LinearDecisionsChart = (): JSX.Element => {
  const linearBuyLabels = useAppStore((state) => state.linearBuyLabels);
  const linearSellLabels = useAppStore((state) => state.linearSellLabels);
  const linearHoldLabels = useAppStore((state) => state.linearHoldLabels);
  const linearBuyData = useAppStore((state) => state.linearBuyData);
  const linearSellData = useAppStore((state) => state.linearSellData);
  const linearHoldData = useAppStore((state) => state.linearHoldData);

  const data_buy = {
    labels: linearBuyLabels,
    datasets: [
      {
        label: "Buy",
        data: linearBuyData,
        borderColor: "rgba(0, 160, 0, 1)",
        backgroundColor: "rgba(0, 160, 0, 0.3)",
        tension: 0.3,
      },
    ],
  };

  const data_sell = {
    labels: linearSellLabels,
    datasets: [
      {
        label: "Sell",
        data: linearSellData,
        borderColor: "rgba(210, 0, 0, 1)",
        backgroundColor: "rgba(210, 0, 0, 0.3)",
        tension: 0.3,
      },
    ],
  };

  const data_hold = {
    labels: linearHoldLabels,
    datasets: [
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
        <Chart type="line" data={data_buy} options={options} />
      </div>

      <div className="h-full">
        <Chart type="line" data={data_sell} options={options} />
      </div>

      <div className="h-full">
        <Chart type="line" data={data_hold} options={options} />
      </div>
    </>
  );
};

export default LinearDecisionsChart;

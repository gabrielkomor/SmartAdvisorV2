import type { JSX } from "react";
import { Chart } from "react-chartjs-2";
import { useAppStore } from "../store/useAppStrore";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Tooltip,
  Legend,
);

const HistoryDecisionsCharts = (): JSX.Element => {
  const histBuyLabels = useAppStore((state) => state.histBuyLabels);
  const histSellLabels = useAppStore((state) => state.histSellLabels);
  const histHoldLabels = useAppStore((state) => state.histHoldLabels);
  const histBuyData = useAppStore((state) => state.histBuyData);
  const histSellData = useAppStore((state) => state.histSellData);
  const histHoldData = useAppStore((state) => state.histHoldData);

  const data_buy = {
    labels: histBuyLabels,
    datasets: [
      {
        label: "Buy",
        data: histBuyData,
        backgroundColor: "rgba(0, 160, 0, 1)",
        borderWidth: 1,
      },
    ],
  };

  const data_sell = {
    labels: histSellLabels,
    datasets: [
      {
        label: "Sell",
        data: histSellData,
        backgroundColor: "rgba(210, 0, 0, 1)",
        borderWidth: 1,
      },
    ],
  };

  const data_hold = {
    labels: histHoldLabels,
    datasets: [
      {
        label: "Hold",
        data: histHoldData,
        backgroundColor: "rgba(120, 120, 120, 1)",
        borderWidth: 1,
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
        <Chart type="bar" data={data_buy} options={options} />
      </div>

      <div className="h-full">
        <Chart type="bar" data={data_sell} options={options} />
      </div>

      <div className="h-full">
        <Chart type="bar" data={data_hold} options={options} />
      </div>
    </>
  );
};

export default HistoryDecisionsCharts;

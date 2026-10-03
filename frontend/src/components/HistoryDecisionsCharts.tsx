import type { JSX } from "react";
import { Chart } from "react-chartjs-2";
<<<<<<< HEAD
=======
import { useAppStore } from "../store/useAppStrore";
>>>>>>> develop
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
<<<<<<< HEAD
  const data_buy = {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: "Buy",
        data: [50, 12, 90, 14, 13],
=======
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
>>>>>>> develop
        backgroundColor: "rgba(0, 160, 0, 1)",
        borderWidth: 1,
      },
    ],
  };

  const data_sell = {
<<<<<<< HEAD
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: "Sell",
        data: [50, 12, 90, 14, 13],
=======
    labels: histSellLabels,
    datasets: [
      {
        label: "Sell",
        data: histSellData,
>>>>>>> develop
        backgroundColor: "rgba(210, 0, 0, 1)",
        borderWidth: 1,
      },
    ],
  };

  const data_hold = {
<<<<<<< HEAD
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: "Hold",
        data: [50, 12, 90, 14, 13],
=======
    labels: histHoldLabels,
    datasets: [
      {
        label: "Hold",
        data: histHoldData,
>>>>>>> develop
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

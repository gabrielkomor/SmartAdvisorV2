import type { JSX } from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const HistoryDecisions = (): JSX.Element => {
  const data_buy = {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: "Buy",
        data: [50, 12, 90, 14, 13],
        backgroundColor: "rgba(0, 160, 0, 1)",
        borderWidth: 1,
      },
    ],
  };

  const data_sell = {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: "Sell",
        data: [50, 12, 90, 14, 13],
        backgroundColor: "rgba(210, 0, 0, 1)",
        borderWidth: 1,
      },
    ],
  };

  const data_hold = {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: "Hold",
        data: [50, 12, 90, 14, 13],
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 w-full h-full">
      <div className="h-full">
        <Chart type="bar" data={data_buy} options={options} />
      </div>

      <div className="h-full">
        <Chart type="bar" data={data_sell} options={options} />
      </div>

      <div className="h-full">
        <Chart type="bar" data={data_hold} options={options} />
      </div>
    </div>
  );
};

export default HistoryDecisions;

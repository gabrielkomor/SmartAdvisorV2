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
  const data = {
    labels: ["0-10", "10-20", "20-30", "30-40", "40-50"],
    datasets: [
      {
        label: "Histogram",
        data: [4, 7, 12, 5, 2],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 w-full h-full">
      <div className="h-full">
        <Chart type="bar" data={data} options={options} />
      </div>

      <div className="h-full">
        <Chart type="bar" data={data} options={options} />
      </div>

      <div className="h-full">
        <Chart type="bar" data={data} options={options} />
      </div>
    </div>
  );
};

export default HistoryDecisions;

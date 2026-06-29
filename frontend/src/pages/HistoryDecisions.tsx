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
    <div className="h-full">
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default HistoryDecisions;

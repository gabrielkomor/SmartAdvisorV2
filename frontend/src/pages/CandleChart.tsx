import { useEffect, useState } from "react";
import { Chart } from "react-chartjs-2";
import "chartjs-adapter-date-fns";

import { Chart as ChartJS } from "chart.js";
import {
  CandlestickController,
  CandlestickElement,
} from "chartjs-chart-financial";

import {
  CategoryScale,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CandlestickController,
  CandlestickElement,
  CategoryScale,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
);

export default function CandlestickChart() {
  const [resizeKey, setResizeKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setResizeKey((k) => k + 1);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dataToPlot = [
    { x: 1491004800000, o: 31.11, h: 33.04, l: 30.58, c: 32.03 },
    { x: 1491177600000, o: 31.23, h: 34.77, l: 30.35, c: 32.24 },
    { x: 1491264000000, o: 31.08, h: 34.68, l: 29.54, c: 32.48 },
    { x: 1491350400000, o: 31.68, h: 33.49, l: 28.72, c: 30.46 },
    { x: 1491436800000, o: 29.4, h: 31.83, l: 27.02, c: 29.76 },
  ];

  const data = {
    datasets: [
      {
        label: "Financial Chart",
        data: dataToPlot,
        borderColor: "rgba(0, 150, 136, 1)",
        color: {
          up: "rgba(0, 200, 5, 1)",
          down: "rgba(200, 0, 0, 1)",
          unchanged: "rgba(100, 100, 100, 1)",
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
      },
      y: {
        beginAtZero: false,
      },
    },
  } satisfies import("chart.js").ChartOptions<"candlestick">;

  return (
    <div className="w-full h-full">
      <Chart key={resizeKey} type="candlestick" data={data} options={options} />
    </div>
  );
}

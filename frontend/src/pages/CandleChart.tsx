import { useEffect, useState } from "react";
import { Chart } from "react-chartjs-2";
import "chartjs-adapter-date-fns";

import { Chart as ChartJS, type ChartData } from "chart.js";
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
  BarElement,
} from "chart.js";

ChartJS.register(
  CandlestickController,
  CandlestickElement,
  CategoryScale,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
  BarElement,
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
    { x: 1491004800000 + 43200000, o: 31.11, h: 33.04, l: 30.58, c: 32.03 },
    { x: 1491091200000 + 43200000, o: 32.05, h: 32.8, l: 31.4, c: 31.9 },
    { x: 1491177600000 + 43200000, o: 31.9, h: 34.77, l: 30.35, c: 33.1 },
    { x: 1491264000000 + 43200000, o: 33.1, h: 34.68, l: 32.2, c: 32.48 },
    { x: 1491350400000 + 43200000, o: 32.5, h: 33.49, l: 28.72, c: 30.46 },
    { x: 1491436800000 + 43200000, o: 30.5, h: 31.83, l: 27.02, c: 29.76 },
  ];

  const volumeToPlot = [
    { x: 1491004800000 + 43200000, y: 1200 },
    { x: 1491091200000 + 43200000, y: 1500 },
    { x: 1491177600000 + 43200000, y: 2800 },
    { x: 1491264000000 + 43200000, y: 2100 },
    { x: 1491350400000 + 43200000, y: 3200 },
    { x: 1491436800000 + 43200000, y: 1700 },
  ];

  const smaToPlot = [
    { x: 1491004800000 + 43200000, y: 31 },
    { x: 1491091200000 + 43200000, y: 32 },
    { x: 1491177600000 + 43200000, y: 30 },
    { x: 1491264000000 + 43200000, y: 32 },
    { x: 1491350400000 + 43200000, y: 31 },
    { x: 1491436800000 + 43200000, y: 30 },
  ];

  const priceData: ChartData<"candlestick" | "line"> = {
    datasets: [
      {
        type: "candlestick" as const,
        label: "Price",
        data: dataToPlot,
        borderColor: "rgba(0, 150, 136, 1)",
        borderColors: {
          up: "rgba(0, 200, 5, 1)",
          down: "rgba(200, 0, 0, 1)",
          unchanged: "rgba(100, 100, 100, 1)",
        },
        backgroundColors: {
          up: "rgba(0, 200, 5, 0.3)",
          down: "rgba(200, 0, 0, 0.3)",
          unchanged: "rgba(100, 100, 100, 0.3)",
        },
        backgroundColor: "rgba(140, 140, 140, 1)",
        yAxisID: "y",
      },

      {
        type: "line",
        label: "SMA",
        data: smaToPlot,
        borderColor: "rgb(229, 235, 52)",
        backgroundColor: "rgba(215, 235, 52, 1)",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.2,
        yAxisID: "y",
      },
    ],
  };

  const volumeData = {
    datasets: [
      {
        type: "bar" as const,
        label: "Volume",
        data: volumeToPlot,
        yAxisID: "yVolume",
        backgroundColor: "rgba(20, 20, 20, 0.9)",
      },
    ],
  };

  const priceOptions = {
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

  const volumeOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
        offset: true,

        ticks: {
          source: "data",
          autoSkip: false,
          maxRotation: 0,
        },

        grid: {
          offset: true,
        },
      },
      y: {
        beginAtZero: true,
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  } satisfies import("chart.js").ChartOptions<"bar">;

  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-[79%]">
        <Chart
          type="candlestick"
          key={resizeKey}
          data={priceData}
          options={priceOptions}
        />
      </div>

      <div className="h-[19%]">
        <Chart
          type="bar"
          key={resizeKey}
          data={volumeData}
          options={volumeOptions}
        />
      </div>
    </div>
  );
}

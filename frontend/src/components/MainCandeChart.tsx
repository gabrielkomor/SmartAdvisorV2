import type { JSX } from "react";
import { useEffect, useMemo, useState } from "react";
import { Chart } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { useAppStore } from "../store/useAppStrore";

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

const MainCandeChart = (): JSX.Element => {
  const showCandles = useAppStore((state) => state.showCandles);
  const setShowCandles = useAppStore((state) => state.setShowCandles);
  const showVolume = useAppStore((state) => state.showVolume);
  const setShowVolume = useAppStore((state) => state.setShowVolume);

  const marketData = useAppStore((state) => state.marketData);
  const newChart = useAppStore((state) => state.newChart);
  const symbol = useAppStore((state) => state.symbol);

  const [resizeKey, setResizeKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setResizeKey((k) => k + 1);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const priceBounds = useMemo(() => {
    if (marketData.length === 0) {
      return { min: undefined, max: undefined };
    }

    let min = Infinity;
    let max = -Infinity;

    for (const point of marketData) {
      min = Math.min(min, point.l);
      max = Math.max(max, point.h);
    }

    const range = max - min;
    const padding =
      range > 0 ? range * 0.08 : Math.max(Math.abs(max) * 0.001, 0.0001);

    return { min: min - padding, max: max + padding };
  }, [marketData]);

  const chartKey = `${resizeKey}-${newChart}-${symbol}-${marketData.length}-${priceBounds.min}-${priceBounds.max}`;

  const priceData: ChartData<"candlestick" | "line" | "bar"> = useMemo(
    () => ({
      datasets: [
        {
          type: "candlestick" as const,
          label: "Price",
          data: marketData,
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
          hidden: showCandles,
        },
      ],
    }),
    [
      marketData,
      showCandles,
    ],
  );

  const volumeData = useMemo(
    () => ({
      datasets: [
        {
          type: "bar" as const,
          label: "Volume",
          data: marketData.map((d) => ({ x: d.x, y: d.y })),
          yAxisID: "yVolume",
          backgroundColor: "rgba(20, 20, 20, 0.9)",
          hidden: showVolume,
        },
      ],
    }),
    [marketData, showVolume],
  );

  const priceOptions = useMemo(
    () =>
      ({
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        scales: {
          x: {
            type: "time",
            time: {
              unit: "day",
            },
            offset: true,
            grid: {
              offset: true,
            },
          },
          y: {
            beginAtZero: false,
            min: priceBounds.min,
            max: priceBounds.max,
          },
        },
        plugins: {
          legend: {
            onClick: (_event, legendItem) => {
              if (legendItem.text === "Price") {
                setShowCandles(!showCandles);
              }
            },
          },
        },
      }) satisfies import("chart.js").ChartOptions<"candlestick">,
    [
      priceBounds.min,
      priceBounds.max,
      showCandles,
      setShowCandles,
    ],
  );

  const volumeOptions = useMemo(
    () =>
      ({
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
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
        plugins: {
          legend: {
            onClick: (_event, legendItem) => {
              if (legendItem.text === "Volume") {
                setShowVolume(!showVolume);
              }
            },
          },
        },
      }) satisfies import("chart.js").ChartOptions<"bar">,
    [showVolume, setShowVolume],
  );

  if (marketData.length === 0) {
    return (
      <div className="flex h-full items-center justify-center text-base-content/60">
        Download data to display the chart
      </div>
    );
  }

  return (
    <>
      <div className="h-[79%]">
        <Chart
          type="candlestick"
          key={`price-${chartKey}`}
          data={priceData}
          options={priceOptions}
        />
      </div>

      <div className="h-[19%]">
        <Chart
          type="bar"
          key={`volume-${chartKey}`}
          data={volumeData}
          options={volumeOptions}
        />
      </div>
    </>
  );
};

export default MainCandeChart;

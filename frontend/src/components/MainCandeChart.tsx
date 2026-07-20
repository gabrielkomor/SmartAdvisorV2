import type { JSX } from "react";
import { useEffect, useState } from "react";
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
  const showSma10 = useAppStore((state) => state.showSma10);
  const setShowSma10 = useAppStore((state) => state.setShowSma10);
  const showSma20 = useAppStore((state) => state.showSma20);
  const setShowSma20 = useAppStore((state) => state.setShowSma20);
  const showSma30 = useAppStore((state) => state.showSma30);
  const setShowSma30 = useAppStore((state) => state.setShowSma30);
  const showRsi = useAppStore((state) => state.showRsi);
  const setShowRsi = useAppStore((state) => state.setShowRsi);
  const showBbUpper = useAppStore((state) => state.showBbUpper);
  const setShowBbUpper = useAppStore((state) => state.setShowBbUpper);
  const showBbLower = useAppStore((state) => state.showBbLower);
  const setShowBbLower = useAppStore((state) => state.setShowBbLower);
  const showMacd = useAppStore((state) => state.showMacd);
  const setShowMacd = useAppStore((state) => state.setShowMacd);
  const showMacdSignal = useAppStore((state) => state.showMacdSignal);
  const setShowMacdSignal = useAppStore((state) => state.setShowMacdSignal);
  const showMacdHisto = useAppStore((state) => state.showMacdHisto);
  const setShowMacdHisto = useAppStore((state) => state.setShowMacdHisto);
  const showDiPlus = useAppStore((state) => state.showDiPlus);
  const setShowDiPlus = useAppStore((state) => state.setShowDiPlus);
  const showDiMinus = useAppStore((state) => state.showDiMinus);
  const setShowDiMinus = useAppStore((state) => state.setShowDiMinus);
  const showAdx = useAppStore((state) => state.showAdx);
  const setShowAdx = useAppStore((state) => state.setShowAdx);
  const showVolume = useAppStore((state) => state.showVolume);
  const setShowVolume = useAppStore((state) => state.setShowVolume);

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

  const sma10ToPlot = [
    { x: 1491004800000 + 43200000, y: 31 },
    { x: 1491091200000 + 43200000, y: 32 },
    { x: 1491177600000 + 43200000, y: 30 },
    { x: 1491264000000 + 43200000, y: 32 },
    { x: 1491350400000 + 43200000, y: 31 },
    { x: 1491436800000 + 43200000, y: 30 },
  ];

  const sma20ToPlot = [
    { x: 1491004800000 + 43200000, y: 32 },
    { x: 1491091200000 + 43200000, y: 33 },
    { x: 1491177600000 + 43200000, y: 31 },
    { x: 1491264000000 + 43200000, y: 33 },
    { x: 1491350400000 + 43200000, y: 32 },
    { x: 1491436800000 + 43200000, y: 31 },
  ];

  const sma30ToPlot = [
    { x: 1491004800000 + 43200000, y: 33 },
    { x: 1491091200000 + 43200000, y: 34 },
    { x: 1491177600000 + 43200000, y: 32 },
    { x: 1491264000000 + 43200000, y: 34 },
    { x: 1491350400000 + 43200000, y: 33 },
    { x: 1491436800000 + 43200000, y: 32 },
  ];

  const RsiToPlot = [
    { x: 1491004800000 + 43200000, y: 34 },
    { x: 1491091200000 + 43200000, y: 35 },
    { x: 1491177600000 + 43200000, y: 33 },
    { x: 1491264000000 + 43200000, y: 35 },
    { x: 1491350400000 + 43200000, y: 34 },
    { x: 1491436800000 + 43200000, y: 33 },
  ];

  const bollingerUpperToPlot = [
    { x: dataToPlot[0].x, y: 35 },
    { x: dataToPlot[1].x, y: 36 },
    { x: dataToPlot[2].x, y: 34 },
    { x: dataToPlot[3].x, y: 36 },
    { x: dataToPlot[4].x, y: 35 },
    { x: dataToPlot[5].x, y: 34 },
  ];

  const bollingerLowerToPlot = [
    { x: dataToPlot[0].x, y: 29 },
    { x: dataToPlot[1].x, y: 30 },
    { x: dataToPlot[2].x, y: 28 },
    { x: dataToPlot[3].x, y: 30 },
    { x: dataToPlot[4].x, y: 29 },
    { x: dataToPlot[5].x, y: 28 },
  ];

  const macdLineToPlot = [
    { x: dataToPlot[0].x, y: 0.5 },
    { x: dataToPlot[1].x, y: 0.8 },
    { x: dataToPlot[2].x, y: 0.3 },
    { x: dataToPlot[3].x, y: 0.6 },
    { x: dataToPlot[4].x, y: 0.2 },
    { x: dataToPlot[5].x, y: 0.4 },
  ];

  const macdSignalToPlot = [
    { x: dataToPlot[0].x, y: 0.4 },
    { x: dataToPlot[1].x, y: 0.6 },
    { x: dataToPlot[2].x, y: 0.25 },
    { x: dataToPlot[3].x, y: 0.5 },
    { x: dataToPlot[4].x, y: 0.15 },
    { x: dataToPlot[5].x, y: 0.3 },
  ];

  const macdHistogramToPlot = [
    { x: dataToPlot[0].x, y: -0.5 },
    { x: dataToPlot[1].x, y: 0.2 },
    { x: dataToPlot[2].x, y: 0.05 },
    { x: dataToPlot[3].x, y: 0.1 },
    { x: dataToPlot[4].x, y: 0.05 },
    { x: dataToPlot[5].x, y: 0.1 },
  ];

  const plusDIToPlot = [
    { x: dataToPlot[0].x, y: 22 },
    { x: dataToPlot[1].x, y: 25 },
    { x: dataToPlot[2].x, y: 23 },
    { x: dataToPlot[3].x, y: 27 },
    { x: dataToPlot[4].x, y: 24 },
    { x: dataToPlot[5].x, y: 26 },
  ];

  const minusDIToPlot = [
    { x: dataToPlot[0].x, y: 18 },
    { x: dataToPlot[1].x, y: 15 },
    { x: dataToPlot[2].x, y: 20 },
    { x: dataToPlot[3].x, y: 17 },
    { x: dataToPlot[4].x, y: 22 },
    { x: dataToPlot[5].x, y: 19 },
  ];

  const adxLineToPlot = [
    { x: dataToPlot[0].x, y: 25 },
    { x: dataToPlot[1].x, y: 26 },
    { x: dataToPlot[2].x, y: 24 },
    { x: dataToPlot[3].x, y: 28 },
    { x: dataToPlot[4].x, y: 26 },
    { x: dataToPlot[5].x, y: 27 },
  ];

  const maxMacdBarThickness = Math.max(
    2,
    Math.floor(((window.innerWidth * 0.75) / dataToPlot.length) * 0.55),
  );

  const priceData: ChartData<"candlestick" | "line" | "bar"> = {
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
        hidden: showCandles,
      },

      // --- SMA 10 20 30 ---
      {
        type: "line",
        label: "SMA 10",
        data: sma10ToPlot,
        borderColor: "rgb(229, 235, 52)",
        backgroundColor: "rgba(215, 235, 52, 1)",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.2,
        yAxisID: "y",
        hidden: !showSma10,
      },

      {
        type: "line",
        label: "SMA 20",
        data: sma20ToPlot,
        borderColor: "rgb(55, 52, 235)",
        backgroundColor: "rgba(30, 52, 235)",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.2,
        yAxisID: "y",
        hidden: !showSma20,
      },

      {
        type: "line",
        label: "SMA 30",
        data: sma30ToPlot,
        borderColor: "rgb(235, 83, 52)",
        backgroundColor: "rgba(220, 83, 52)",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.2,
        yAxisID: "y",
        hidden: !showSma30,
      },

      // --- RSI ---
      {
        type: "line",
        label: "RSI",
        data: RsiToPlot,
        borderColor: "rgb(235, 12, 12)",
        backgroundColor: "rgba(220, 52, 52)",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.2,
        yAxisID: "y",
        hidden: !showRsi,
      },

      // --- Bollinger Bands ---
      {
        type: "line",
        label: "BB Upper",
        data: bollingerUpperToPlot,
        borderColor: "rgba(0, 150, 255, 1)",
        backgroundColor: "rgba(0, 150, 255, 0.3)",
        borderWidth: 1,
        pointRadius: 0,
        tension: 0.2,
        borderDash: [6, 6],
        yAxisID: "y",
        hidden: !showBbUpper,
      },
      {
        type: "line",
        label: "BB Lower",
        data: bollingerLowerToPlot,
        borderColor: "rgba(0, 150, 255, 1)",
        backgroundColor: "rgba(0, 150, 255, 0.3)",
        borderWidth: 1,
        pointRadius: 0,
        tension: 0.2,
        borderDash: [6, 6],
        yAxisID: "y",
        hidden: !showBbLower,
      },

      // --- MACD ---
      {
        type: "line",
        label: "MACD",
        data: macdLineToPlot,
        borderColor: "rgba(255, 165, 0, 1)",
        backgroundColor: "rgba(255, 165, 0, 0.3)",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.2,
        yAxisID: "y",
        hidden: !showMacd,
      },
      {
        type: "line",
        label: "MACD Signal",
        data: macdSignalToPlot,
        borderColor: "rgba(255, 100, 0, 1)",
        backgroundColor: "rgba(255, 100, 0, 0.3)",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.2,
        yAxisID: "y",
        hidden: !showMacdSignal,
      },
      {
        type: "bar",
        label: "MACD Histogram",
        data: macdHistogramToPlot,
        barThickness: "flex",
        maxBarThickness: maxMacdBarThickness,
        barPercentage: 0.75,
        categoryPercentage: 0.8,
        backgroundColor: (ctx) => {
          const raw = ctx.raw as { y: number };
          return raw.y >= 0 ? "rgba(0, 200, 5, 0.8)" : "rgba(255, 50, 50, 0.8)";
        },
        borderColor: (ctx) => {
          const raw = ctx.raw as { y: number };
          return raw.y >= 0 ? "rgba(0, 200, 5, 1)" : "rgba(255, 50, 50, 1)";
        },
        borderWidth: 1,
        yAxisID: "y",
        hidden: !showMacdHisto,
      },

      // --- ADX ---
      {
        type: "line",
        label: "+DI",
        data: plusDIToPlot,
        borderColor: "rgba(0, 200, 0, 1)",
        backgroundColor: "rgba(0, 200, 0, 0.3)",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.2,
        yAxisID: "y",
        hidden: !showDiPlus,
      },
      {
        type: "line",
        label: "-DI",
        data: minusDIToPlot,
        borderColor: "rgba(200, 0, 0, 1)",
        backgroundColor: "rgba(200, 0, 0, 0.3)",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.2,
        yAxisID: "y",
        hidden: !showDiMinus,
      },
      {
        type: "line",
        label: "ADX",
        data: adxLineToPlot,
        borderColor: "rgba(150, 150, 150, 1)",
        backgroundColor: "rgba(150, 150, 150, 0.3)",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.2,
        yAxisID: "y",
        hidden: !showAdx,
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
        hidden: showVolume,
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
        offset: true,
        grid: {
          offset: true,
        },
      },
      y: {
        beginAtZero: false,
      },
    },
    plugins: {
      legend: {
        onClick: (_event, legendItem) => {
          if (legendItem.text === "Price") {
            setShowCandles(!showCandles);
          } else if (legendItem.text === "SMA 10") {
            setShowSma10(!showSma10);
          } else if (legendItem.text === "SMA 20") {
            setShowSma20(!showSma20);
          } else if (legendItem.text === "SMA 30") {
            setShowSma30(!showSma30);
          } else if (legendItem.text === "RSI") {
            setShowRsi(!showRsi);
          } else if (legendItem.text === "BB Upper") {
            setShowBbUpper(!showBbUpper);
          } else if (legendItem.text === "BB Lower") {
            setShowBbLower(!showBbLower);
          } else if (legendItem.text === "MACD") {
            setShowMacd(!showMacd);
          } else if (legendItem.text === "MACD Signal") {
            setShowMacdSignal(!showMacdSignal);
          } else if (legendItem.text === "MACD Histogram") {
            setShowMacdHisto(!showMacdHisto);
          } else if (legendItem.text === "+DI") {
            setShowDiPlus(!showDiPlus);
          } else if (legendItem.text === "-DI") {
            setShowDiMinus(!showDiMinus);
          } else if (legendItem.text === "ADX") {
            setShowAdx(!showAdx);
          }
        },
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
    plugins: {
      legend: {
        onClick: (_event, legendItem) => {
          if (legendItem.text === "Volume") {
            setShowVolume(!showVolume);
          }
        },
      },
    },
  } satisfies import("chart.js").ChartOptions<"bar">;

  return (
    <>
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
    </>
  );
};

export default MainCandeChart;

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

  const {
    sma10ToPlot,
    sma20ToPlot,
    sma30ToPlot,
    rsiToPlot,
    bollingerUpperToPlot,
    bollingerLowerToPlot,
    macdLineToPlot,
    macdSignalToPlot,
    macdHistogramToPlot,
    plusDIToPlot,
    minusDIToPlot,
    adxLineToPlot,
    maxMacdBarThickness,
  } = useMemo(() => {
    const dataLength = Math.max(marketData.length, 1);

    return {
      sma10ToPlot: marketData.map((d) => ({ x: d.x, y: d.c * 0.99 })),
      sma20ToPlot: marketData.map((d) => ({ x: d.x, y: d.c * 0.995 })),
      sma30ToPlot: marketData.map((d) => ({ x: d.x, y: d.c * 1.01 })),
      rsiToPlot: marketData.map((d, i) => ({
        x: d.x,
        y: 30 + ((i * 7) % 40),
      })),
      bollingerUpperToPlot: marketData.map((d) => ({
        x: d.x,
        y: d.h * 1.02,
      })),
      bollingerLowerToPlot: marketData.map((d) => ({
        x: d.x,
        y: d.l * 0.98,
      })),
      macdLineToPlot: marketData.map((d, i) => ({
        x: d.x,
        y: Math.sin(i / 10) * 0.5,
      })),
      macdSignalToPlot: marketData.map((d, i) => ({
        x: d.x,
        y: Math.sin(i / 10 + 0.5) * 0.4,
      })),
      macdHistogramToPlot: marketData.map((d, i) => ({
        x: d.x,
        y: Math.sin(i / 10) * 0.2,
      })),
      plusDIToPlot: marketData.map((d, i) => ({
        x: d.x,
        y: 20 + ((i * 3) % 10),
      })),
      minusDIToPlot: marketData.map((d, i) => ({
        x: d.x,
        y: 15 + ((i * 5) % 10),
      })),
      adxLineToPlot: marketData.map((d, i) => ({
        x: d.x,
        y: 22 + ((i * 2) % 8),
      })),
      maxMacdBarThickness: Math.max(
        2,
        Math.floor(((window.innerWidth * 0.75) / dataLength) * 0.55),
      ),
    };
  }, [marketData]);

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
        data: rsiToPlot,
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
  }),
    [
      marketData,
      showCandles,
      showSma10,
      showSma20,
      showSma30,
      showRsi,
      showBbUpper,
      showBbLower,
      showMacd,
      showMacdSignal,
      showMacdHisto,
      showDiPlus,
      showDiMinus,
      showAdx,
      sma10ToPlot,
      sma20ToPlot,
      sma30ToPlot,
      rsiToPlot,
      bollingerUpperToPlot,
      bollingerLowerToPlot,
      macdLineToPlot,
      macdSignalToPlot,
      macdHistogramToPlot,
      plusDIToPlot,
      minusDIToPlot,
      adxLineToPlot,
      maxMacdBarThickness,
      setShowCandles,
      setShowSma10,
      setShowSma20,
      setShowSma30,
      setShowRsi,
      setShowBbUpper,
      setShowBbLower,
      setShowMacd,
      setShowMacdSignal,
      setShowMacdHisto,
      setShowDiPlus,
      setShowDiMinus,
      setShowAdx,
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
      }) satisfies import("chart.js").ChartOptions<"candlestick">,
    [
      priceBounds.min,
      priceBounds.max,
      showCandles,
      showSma10,
      showSma20,
      showSma30,
      showRsi,
      showBbUpper,
      showBbLower,
      showMacd,
      showMacdSignal,
      showMacdHisto,
      showDiPlus,
      showDiMinus,
      showAdx,
      setShowCandles,
      setShowSma10,
      setShowSma20,
      setShowSma30,
      setShowRsi,
      setShowBbUpper,
      setShowBbLower,
      setShowMacd,
      setShowMacdSignal,
      setShowMacdHisto,
      setShowDiPlus,
      setShowDiMinus,
      setShowAdx,
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

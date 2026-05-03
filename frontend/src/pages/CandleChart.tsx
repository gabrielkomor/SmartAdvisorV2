import Plotly from "plotly.js-dist-min";
import { useEffect, useRef, type JSX } from "react";

const CandleChart = (): JSX.Element => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    Plotly.newPlot(
      chartRef.current,
      [
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: "scatter",
          mode: "lines+markers",
        },
      ],
      {
        title: "Wykres",
      },
      { responsive: true },
    );

    const observer = new ResizeObserver(() => {
      if (!chartRef.current) return;
      Plotly.Plots.resize(chartRef.current);
      Plotly.relayout(chartRef.current, {});
    });

    observer.observe(chartRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={chartRef}
      style={{
        width: "100%",
        height: "100%",
        minHeight: "300px",
      }}
    />
  );
};

export default CandleChart;

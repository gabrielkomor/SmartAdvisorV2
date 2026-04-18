import { BrowserRouter, Routes, Route } from "react-router-dom";

import type { JSX } from "react";

import Layout from "./pages/Layout";
import DownloadData from "./pages/DownloadData";
import CandleChart from "./pages/CandleChart";
import SignalsHistory from "./pages/SignalsHistory";
import HistoryDecisions from "./pages/HistoryDecisions";
import LinearDecisions from "./pages/LinearDecisions";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="downloadData" element={<DownloadData />} />
          <Route path="candleChart" element={<CandleChart />} />
          <Route path="signalsHisotry" element={<SignalsHistory />} />
          <Route path="hisotryDecisions" element={<HistoryDecisions />} />
          <Route path="linearDecisions" element={<LinearDecisions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

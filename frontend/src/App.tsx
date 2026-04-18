import { BrowserRouter, Routes, Route } from "react-router-dom";

import type { JSX } from "react";
import Menu from "./pages/Menu";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

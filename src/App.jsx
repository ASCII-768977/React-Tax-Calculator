import React from "react";
import { Route, Routes } from "react-router-dom";
import CalculatorPage from "./pages/CalculatorPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CalculatorPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;

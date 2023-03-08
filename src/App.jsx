import React from "react";
import { Route, Routes } from "react-router-dom";
import CalculatorPage from "./pages/CalculatorPage";
import ResultPage from "./pages/ResultPage";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<CalculatorPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Provider>
  );
}

export default App;

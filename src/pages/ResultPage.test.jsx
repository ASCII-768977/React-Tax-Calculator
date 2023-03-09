import React from "react";
import { render, screen } from "@testing-library/react";
import ResultPage from "./ResultPage";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

describe("ResultPage", () => {
  it("renders Result component", () => {
    render(
      <Provider store={store}>
        <Router>
          <ResultPage />
        </Router>
      </Provider>
    );
    const resultElement = screen.getByTestId("result");
    expect(resultElement).toBeInTheDocument();
  });

  it("renders background element", () => {
    render(
      <Provider store={store}>
        <Router>
          <ResultPage />
        </Router>
      </Provider>
    );
    const backgroundElement = screen.getByTestId("result-page");
    expect(backgroundElement).toBeInTheDocument();
  });
});

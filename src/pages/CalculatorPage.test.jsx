import React from "react";
import { render, screen } from "@testing-library/react";
import CalculatorPage from "./CalculatorPage";
import { Provider } from "react-redux";
import store from "../redux/store";
import { MemoryRouter } from "react-router-dom";

describe("CalculatorPage", () => {
  it("renders Calculator component", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CalculatorPage />
        </MemoryRouter>
      </Provider>
    );
    const calculatorElement = screen.getByTestId("calculator");
    expect(calculatorElement).toBeInTheDocument();
  });

  it("renders background element", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CalculatorPage />
        </MemoryRouter>
      </Provider>
    );
    const backgroundElement = screen.getByTestId("calculator-page");
    expect(backgroundElement).toBeInTheDocument();
  });
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Calculator from "./Calculator";

describe("Calculator component", () => {
  it("should render the Calculator component and select default values", () => {
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Calculator />
        </MemoryRouter>
      </Provider>
    );

    expect(getByText("Tax-o-tron")).toBeInTheDocument();
    expect(getByLabelText("Select your country of residence *")).toHaveValue(
      "Australia"
    );
    expect(getByLabelText("Select an income year *")).toHaveValue(
      "2022 - 2023"
    );
    expect(
      getByLabelText("Enter your total taxable income for the income year *")
    ).toHaveValue(null);
    expect(getByText("Calculate")).toBeInTheDocument();
  });

  it("should update the input value when the user types in a new value", () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Calculator />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.change(
      getByLabelText("Enter your total taxable income for the income year *"),
      { target: { value: "50000" } }
    );
    expect(
      getByLabelText("Enter your total taxable income for the income year *")
    ).toHaveValue(50000);
  });

  it("should dispatch storeSelections when the user clicks the Calculate button", () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Calculator />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(getByText("Calculate"));
    expect(store.getState().selections.country).toBe("Australia");
    expect(store.getState().selections.year).toBe("2020 - 2021");
    expect(store.getState().selections.amount).toBe(0);
  });
});

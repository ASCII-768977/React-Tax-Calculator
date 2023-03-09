import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import store from "../../redux/store";
import Result from "./Result";
import { storeSelections } from "../../redux/actions";
import Breakdown from "../Breakdown/Breakdown";

describe("Result component", () => {
  it("should render the Result component with default values", () => {
    const { getByText, getByLabelText, getAllByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/result"]}>
          <Result />
        </MemoryRouter>
      </Provider>
    );

    expect(getByLabelText("Select your country of residence *")).toHaveValue(
      "Australia"
    );
    expect(getByLabelText("Select an income year *")).toHaveValue(
      "2022 - 2023"
    );
    expect(
      getByLabelText("Enter your total taxable income for the income year *")
    ).toHaveValue("0");
    expect(getByText("Your tax result")).toBeInTheDocument();
    expect(getByText("Your estimated taxable income is:")).toBeInTheDocument();
    expect(getByText("Breakdown")).toBeInTheDocument();
    expect(getAllByText("Go back to the previous screen")).toHaveLength(2);
  });
  it("should render the Result component with values from store", () => {
    // should dispatch storeSelections before rendering the component
    store.dispatch(
      storeSelections({
        country: "United States",
        year: "2022 - 2023",
        amount: 50000,
      })
    );
    const { getByText, getByLabelText, getAllByText,getAllByTestId } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/result"]}>
          <Result />
        </MemoryRouter>
      </Provider>
    );

    // store.dispatch(
    //   storeSelections({
    //     country: "United States",
    //     year: "2022 - 2023",
    //     amount: 50000,
    //   })
    // );

    expect(getByLabelText("Select your country of residence *")).toHaveValue(
      "United States"
    );
    expect(getByLabelText("Select an income year *")).toHaveValue(
      "2022 - 2023"
    );
    expect(
      getByLabelText("Enter your total taxable income for the income year *")
    ).toHaveValue("50,000");
    expect(getByText("Your tax result")).toBeInTheDocument();
    expect(getByText("Your estimated taxable income is:")).toBeInTheDocument();
    expect(getByText("Breakdown")).toBeInTheDocument();
    expect(getAllByTestId("breakdown")).toHaveLength(5);
    expect(getAllByText("Go back to the previous screen")).toHaveLength(2);
  });

  // it("should render the Result component with custom amounts", () => {
  //   const { getByText, getByLabelText } = render(
  //     <Provider store={store}>
  //       <MemoryRouter initialEntries={["/result"]}>
  //         <Result />
  //       </MemoryRouter>
  //     </Provider>
  //   );

  //   const amountInput = getByLabelText(
  //     "Enter your total taxable income for the income year *"
  //   );
  //   fireEvent.change(amountInput, { target: { value: 75000 } });

  //   expect(amountInput).toHaveValue(75000);
  //   expect(getByText("$14,842.00")).toBeInTheDocument();
  //   expect(getByText("$0", { exact: false })).toBeInTheDocument();
  //   expect(getByText("$5,092.00", { exact: false })).toBeInTheDocument();
  //   expect(getByText("$9,750.00", { exact: false })).toBeInTheDocument();
  //   expect(getByText("$0", { exact: false })).toBeInTheDocument();
  //   expect(getByText("$0", { exact: false })).toBeInTheDocument();
  // });
});

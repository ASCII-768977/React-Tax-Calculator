import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer, { storeSelections } from "./reducer";

describe("selection reducer", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        selections: reducer,
      },
    });
  });

  test("should store the selections correctly", () => {
    const selections = {
      country: "Canada",
      year: "2021 - 2022",
      amount: 100,
    };

    store.dispatch(storeSelections(selections));

    const state = store.getState().selections;

    expect(state.country).toBe("Canada");
    expect(state.year).toBe("2021 - 2022");
    expect(state.amount).toBe(100);
  });
});

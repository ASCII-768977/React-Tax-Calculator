import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter, Routes, Route } from "react-router-dom";
// import userEvent from "@testing-library/user-event";
import CalculatorPage from "./pages/CalculatorPage";
import ResultPage from "./pages/ResultPage";
import { Provider } from "react-redux";
import store from "./redux/store";

describe("App", () => {
  it("renders the calculator page by default", () => {
    render(<App />, { wrapper: MemoryRouter });
    expect(screen.getByTestId("calculator-page")).toBeInTheDocument();
  });

  it("renders the result page when navigating to /result", () => {
    render(
      <MemoryRouter initialEntries={["/result"]}>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<CalculatorPage />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByTestId("result-page")).toBeInTheDocument();
  });
});

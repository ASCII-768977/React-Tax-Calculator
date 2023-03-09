import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Selector from "./Selector";
import jest from "jest-mock";

describe("Selector", () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const value = "Option 2";
  const setValue = jest.fn();

  it("renders correctly", () => {
    render(<Selector options={options} value={value} setValue={setValue} />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(3);
  });

  it("calls setValue on option change", () => {
    render(<Selector options={options} value={value} setValue={setValue} />);
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "Option 3" } });
    expect(setValue).toHaveBeenCalledTimes(1);
    expect(setValue).toHaveBeenCalledWith("Option 3");
  });

  it("disables the select when isDisabled prop is true", () => {
    render(<Selector options={options} value={value} isDisabled />);
    const select = screen.getByRole("combobox");
    expect(select).toBeDisabled();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });
});

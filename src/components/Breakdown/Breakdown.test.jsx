import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Breakdown from "./Breakdown";

describe("Breakdown component", () => {
  it("should render the correct tax bracket range and breakdown", () => {
    const props = {
      range: "$0 - $18,200",
      taxBreakdown: "0",
    };

    const { getByText } = render(
      <MemoryRouter>
        <Breakdown {...props} />
      </MemoryRouter>
    );

    expect(getByText(props.range)).toBeInTheDocument();
    expect(getByText(`$${props.taxBreakdown}`)).toBeInTheDocument();
  });

  it("should display zero breakdown when tax breakdown value is zero", () => {
    const props = {
      range: "$0 - $18,200",
      taxBreakdown: "0",
    };

    const { getByText } = render(
      <MemoryRouter>
        <Breakdown {...props} />
      </MemoryRouter>
    );

    expect(getByText(`$${props.taxBreakdown}`)).toBeInTheDocument();
  });

  it("should display a positive breakdown value when tax breakdown is greater than zero", () => {
    const props = {
      range: "$0 - $18,200",
      taxBreakdown: "182",
    };

    const { getByText } = render(
      <MemoryRouter>
        <Breakdown {...props} />
      </MemoryRouter>
    );

    expect(getByText(`$${props.taxBreakdown}`)).toBeInTheDocument();
  });

  it("should display a negative breakdown value when tax breakdown is negative", () => {
    const props = {
      range: "$0 - $18,200",
      taxBreakdown: "-50",
    };

    const { getByText } = render(
      <MemoryRouter>
        <Breakdown {...props} />
      </MemoryRouter>
    );

    expect(getByText(`$${props.taxBreakdown}`)).toBeInTheDocument();
  });

  it("should display a breakdown value with decimals when tax breakdown has decimals", () => {
    const props = {
      range: "$0 - $18,200",
      taxBreakdown: "182.50",
    };

    const { getByText } = render(
      <MemoryRouter>
        <Breakdown {...props} />
      </MemoryRouter>
    );

    expect(getByText(`$${props.taxBreakdown}`)).toBeInTheDocument();
  });

  // it("should display the correct range when range is not formatted", () => {
  //   const props = {
  //     range: "0-18200",
  //     taxBreakdown: "182",
  //   };

  //   const { getByText } = render(
  //     <MemoryRouter>
  //       <Breakdown {...props} />
  //     </MemoryRouter>
  //   );

  //   expect(getByText("$0 - $18,200")).toBeInTheDocument();
  // });

  // it("should display an error message when range is invalid", () => {
  //   const props = {
  //     range: "",
  //     taxBreakdown: "0",
  //   };

  //   const { getByText } = render(
  //     <MemoryRouter>
  //       <Breakdown {...props} />
  //     </MemoryRouter>
  //   );

  //   expect(getByText("Invalid range")).toBeInTheDocument();
  // });
});

import React from "react";
import Selector from "../Selector/Selector";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Breakdown from "../Breakdown/Breakdown";
import {
  calculateTax,
  formatNumber,
  totalTaxFormat,
} from "../utils/GeneralFunctions";

const countryList = [
  "Australia",
  "United States",
  "China",
  "Canada",
  "New Zealand",
];

const yearList = ["2020 - 2021", "2019 - 2020", "2018 - 2019", "2017 - 2018"];

const Result = () => {
  const country = useSelector((state) => state.selections.country);
  const year = useSelector((state) => state.selections.year);
  const amount = useSelector((state) => state.selections.amount);
  const taxBreakdown = calculateTax(country, year, amount);

  return (
    <section className="app-background">
      <form action="#" className="left-form">
        <h2 className="form-heading">Your tax result</h2>
        <label htmlFor="country" className="label-description">
          Select your country of residence *
        </label>
        <Selector isDisabled={true} value={country} />
        <label htmlFor="year" className="label-description">
          Select an income year *
        </label>
        <Selector isDisabled={true} value={year} />
        <label htmlFor="amount" className="label-description">
          Enter your total taxable income for the income year *
        </label>
        <div className="amount-input">
          <div className="amount-input-sign">$</div>
          <input
            type="number"
            id="amount"
            name="amount"
            className="amount-input-field"
            placeholder={formatNumber(amount)}
            disabled
          />
          <div className="amount-input-foot">.00</div>
        </div>
        <Link to="/">
          <p>Go back to the previous screen</p>
        </Link>
      </form>

      <div className="right-section">
        <div className="earth"></div>
        <div className="moon"></div>

        <div className="result-heading">Your estimated taxable income is:</div>
        <div className="result">
          <span>{totalTaxFormat.format(taxBreakdown.totalTax)}</span>
        </div>
        <div className="breakdown-heading">Breakdown</div>
        <div className="breakdown">
          <Breakdown
            range="$0 - $18,200"
            taxBreakdown={formatNumber(taxBreakdown.tax1)}
          />
          <Breakdown
            range="$18,201 - $45,000"
            taxBreakdown={formatNumber(taxBreakdown.tax2)}
          />
          <Breakdown
            range="$45,001 - $120,000"
            taxBreakdown={formatNumber(taxBreakdown.tax3)}
          />
          <Breakdown
            range="$120,001 - $180,000"
            taxBreakdown={formatNumber(taxBreakdown.tax4)}
          />
          <Breakdown
            range="$180,001+"
            taxBreakdown={formatNumber(taxBreakdown.tax5)}
          />
        </div>
        <Link to="/">
          <p className="media-go-back">Go back to the previous screen</p>
        </Link>
      </div>
    </section>
  );
};

export default Result;

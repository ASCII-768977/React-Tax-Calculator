import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Selector from "../Selector/Selector";
import { storeSelections } from "../../redux/actions";
import { Link } from "react-router-dom";
import InformationLogo from "../../assets/information.svg";

const countryList = [
  "Australia",
  "United States",
  "China",
  "Canada",
  "New Zealand",
];

const yearList = ["2020 - 2021", "2019 - 2020", "2018 - 2019", "2017 - 2018"];

const Calculator = (props) => {
  const [country, setCountry] = useState("Australia");
  const [year, setYear] = useState("2020 - 2021");
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const handleAmountChange = (event) => {
    if (event.target.value <= 0 || event.target.value === "") {
      setAmount(0);
    } else {
      setAmount(event.target.value);
    }
  };

  const handleSubmit = () => {
    dispatch(storeSelections({ country, year, amount }));
  };

  return (
    <section className="app-background">
      <div className="left-section">
        <h2 className="left-section-heading">Tax-o-tron</h2>
        <p className="left-section-description">
          The free and simple online tax calculator
        </p>
        <div className="earth"></div>
        <div className="moon"></div>
      </div>

      <form action="#" className="right-form" onSubmit={handleSubmit}>
        <h2 className="form-heading">Calculate your tax</h2>
        <div className="information">
          <img src={InformationLogo} alt="info" className="information-icon" />
          <span className="information-text">
            Fields marked with * are mandatory
          </span>
        </div>

        <label htmlFor="country" className="label-description">
          Select your country of residence *
        </label>

        <Selector
          isDisabled={false}
          options={countryList}
          value={country}
          setValue={setCountry}
        />

        <label htmlFor="year" className="label-description">
          Select an income year *
        </label>

        <Selector
          isDisabled={false}
          options={yearList}
          value={year}
          setValue={setYear}
        />

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
            onChange={handleAmountChange}
            placeholder="Amount"
          />
          <div className="amount-input-foot">.00</div>
        </div>

        <Link to="/result">
          <input
            type="submit"
            value="Calculate"
            className="submit"
            onClick={handleSubmit}
          />
        </Link>
      </form>
    </section>
  );
};

export default Calculator;

import React from "react";

const Breakdown = (props) => {
  const { range, taxBreakdown } = props;

  return (
    <div className="breakdown-container">
      <div className="breakdown-container-left">
        <p>Tax Bracket</p>
        <p>{range}</p>
      </div>
      <div className="breakdown-container-right">${taxBreakdown}</div>
    </div>
  );
};

export default Breakdown;

import React from "react";

const Selector = (props) => {
  const { isDisabled, options, value, setValue } = props;

  const handleOptionChange = (e) => {
    if (setValue) {
      setValue(e.target.value);
    }
  };

  const eachOption = (options || []).map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <>
      {isDisabled ? (
        <select className="select-input" disabled>
          <option>{value}</option>
        </select>
      ) : (
        <select className="select-input" onChange={handleOptionChange}>
          {eachOption}
        </select>
      )}
    </>
  );
};

export default Selector;

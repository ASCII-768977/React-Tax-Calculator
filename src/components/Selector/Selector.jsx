import React from "react";

const Selector = (props) => {
  const { isDisabled, options, value, setValue, id } = props;

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
        <select className="select-input" id={id} disabled>
          <option>{value}</option>
        </select>
      ) : (
        <select className="select-input" id={id} onChange={handleOptionChange}>
          {eachOption}
        </select>
      )}
    </>
  );
};

export default Selector;

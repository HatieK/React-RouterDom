import React from "react";

const Select = ({ options, error, ...rest }) => {
  return (
    <select className={`form__input ${error ? "formerror" : " "}`} {...rest}>
      {options.map((option, index) => {
        return (
          <option key={option?.value || index} value={option.value}>
            {option?.label || ""}
          </option>
        );
      })}
    </select>
  );
};

export default Select;

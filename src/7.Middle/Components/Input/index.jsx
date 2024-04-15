import React from "react";

const Input = ({ label, required, error, renderInput, ...rest }) => {
  // console.log("🚀rest---->", rest);
  return (
    <div className="form-group">
      <label className="label">
        {label} {required && <span>*</span>}
      </label>
      {renderInput?.({ error, ...rest }) || (
        <input
          {...rest}
          className={`form__input ${error ? "formerror" : " "}`}
        />
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;

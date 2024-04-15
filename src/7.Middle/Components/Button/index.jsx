import React from "react";

const Button = ({ variant, children, className, ...rest }) => {
  let variantClass = "";
  switch (variant) {
    case "primary":
      variantClass = "btn btn--primary";
      break;
    case "border":
      variantClass = "btn btn--border --black";
    default:
      break;
  }
  return (
    <button className={`btn ${variantClass} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;

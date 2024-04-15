import React from "react";

const BannerContent = ({ headerStyle, textStyle, ...rest }) => {
  // const { headerStyle, textStyle, ...rest } = props;
  return (
    <div>
      <h1 style={headerStyle}>
        Welcome To {rest?.course || "CFD Circle 2024"}{" "}
      </h1>
      <p style={textStyle}>This is {rest?.teacher || "Teacher"}</p>
    </div>
  );
};

export default BannerContent;

import React from "react";
import BannerContent from "./BannerContent";

const Banner = ({ width, height, background, children }) => {
  const bannerStyle = {
    width: width,
    height: height,
    background: background,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return <div style={bannerStyle}>{children}</div>;
};

export default Banner;

import React from "react";

const Image = ({ source, Alt, style }) => {
  return <img src={source} alt={Alt} style={style}></img>;
};

export default Image;

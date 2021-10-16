import React from "react";
import "./style.css";

const SectionTitle = (props) => {
  return (
    <div>
      <h2 className="sec-title">{props.title}</h2>
      <hr className="line" />
    </div>
  );
};

export default SectionTitle;

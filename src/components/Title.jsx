import React from "react";

function Title({ title, subtitle, classText }) {
  return (
    <div className={`section-title ${classText}`}>
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
  );
}

export default Title;

Title.defaultProps = {
  classText: "title-shape text-center",
};

import React from "react";

const ctx = where => {
  switch (where) {
    case "left":
      return "about";
    case "right":
      return "topics";
    default:
      throw new Error("ctx not working as expected");
  }
};

const ContainerSmall = ({ children, where }) => {
  return <div className={ctx(where)}>{children}</div>;
};

export default ContainerSmall;

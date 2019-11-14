import React from "react";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

export default class Landing extends React.Component {
  render() {
    return (
      <div className="main">
        <LeftBox />
        <RightBox />
      </div>
    );
  }
}

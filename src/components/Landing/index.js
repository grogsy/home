import React from "react";
import LeftBox from "./leftbox";
import RightBox from "./rightbox";

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

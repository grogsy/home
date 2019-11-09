import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        {/** Header Item Components Here */}
        <div className="header-item">
          <a href="#">Projects</a>
        </div>
        <div className="header-item">
          <a href="#">Contact</a>
        </div>
        <div className="header-item">
          <a href="#">Resume</a>
        </div>
      </div>
    );
  }
}

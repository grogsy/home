import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        {/** Header Item Components Here */}
        <div className="header-item">
          <p className="grow">Projects</p>
        </div>
        <div className="header-item">
          <p className="grow">Contact</p>
        </div>
        <div className="header-item">
          <p className="grow">Resume</p>
        </div>
      </div>
    );
  }
}

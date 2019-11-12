import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faAddressCard,
  faTasks
} from "@fortawesome/free-solid-svg-icons";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        {/** Header Item Components Here */}
        <div className="header-item">
          <p className="header-text">Projects</p>
          <Link to="/projects" className="react-link">
            <FontAwesomeIcon icon={faTasks} className="grow icon" size="3x" />
          </Link>
        </div>
        <div className="header-item">
          <p className="header-text">Contact</p>
          <FontAwesomeIcon
            icon={faAddressCard}
            className="grow icon"
            size="3x"
          />
        </div>
        <div className="header-item">
          <p className="header-text">Resume</p>
          <FontAwesomeIcon icon={faCopy} className="grow icon" size="3x" />
        </div>
      </div>
    );
  }
}

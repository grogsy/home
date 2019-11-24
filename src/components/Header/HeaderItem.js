import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderItem = ({ headerName, link, icon }) => {
  return (
    <div className="header-item">
      <div className="header-text-container">
        {/* <p className="header-text">{headerName}</p> */}
        <h5>
          <span className="badge header-text">{headerName}</span>
        </h5>
      </div>
      <Link to={`/${link}`} className="react-link">
        <div>
          <FontAwesomeIcon icon={icon} className="header-icon" size="3x" />
        </div>
      </Link>
    </div>
  );
};

export default HeaderItem;

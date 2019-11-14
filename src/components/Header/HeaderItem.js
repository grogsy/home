import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderItem = ({ headerName, link, icon }) => {
  return (
    <div className="header-item">
      <p className="header-text">{headerName}</p>
      <Link to={`/${link}`} className="react-link clickable-space">
        <div>
          <FontAwesomeIcon icon={icon} className="header-icon" size="3x" />
        </div>
      </Link>
    </div>
  );
};

export default HeaderItem;

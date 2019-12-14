import React from "react";
import Link from "../Layout/LinkParser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderItem = ({ headerName, link, icon }) => {
  return (
    <div className="header-item">
      <Link link={link}>
        <FontAwesomeIcon icon={icon} className="header-icon" size="lg" />
      </Link>
      <div className="header-text-container">
        <Link link={link} extraClasses="nav-link">
          <span className="header-text">{headerName}</span>
        </Link>
      </div>
    </div>
  );
};

export default HeaderItem;

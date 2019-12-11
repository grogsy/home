import React from "react";
import {
  faCopy,
  faAddressCard,
  faTasks,
  faHome
} from "@fortawesome/free-solid-svg-icons";

import HeaderItem from "./HeaderItem";

const Header = ({ className }) => {
  return (
    <div className={className}>
      <HeaderItem headerName="Home" icon={faHome} />
      <HeaderItem headerName="Projects" icon={faTasks} link="projects" />
      <HeaderItem headerName="Contact" icon={faAddressCard} link="contact" />
      <HeaderItem headerName="Resume" icon={faCopy} link="resume" />
    </div>
  );
};

export default Header;

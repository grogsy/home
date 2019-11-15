import React from "react";
import {
  faCopy,
  faAddressCard,
  faTasks
} from "@fortawesome/free-solid-svg-icons";

import HeaderItem from "./HeaderItem";

const Header = ({ className }) => {
  return (
    <div className={className}>
      <HeaderItem headerName="Projects" icon={faTasks} link="projects" />
      <HeaderItem headerName="Contact" icon={faAddressCard} link="contact" />
      <HeaderItem headerName="Resume" icon={faCopy} link="resume" />
    </div>
  );
};

export default Header;

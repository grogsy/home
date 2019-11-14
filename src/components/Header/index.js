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
      <HeaderItem headerName="Projects" icon={faTasks} />
      <HeaderItem headerName="Contact" icon={faAddressCard} />
      <HeaderItem headerName="Resumse" icon={faCopy} />
    </div>
  );
};

export default Header;

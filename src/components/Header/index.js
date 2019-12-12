import React from "react";
import { faCopy, faTasks, faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import HeaderItem from "./HeaderItem";

const Header = ({ className }) => {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <HeaderItem headerName="Home" icon={faHome} />
      <HeaderItem headerName="Projects" icon={faTasks} link="projects" />
      <HeaderItem headerName="Resume" icon={faCopy} link="resume" />
      <HeaderItem
        headerName="GitHub"
        icon={faGithub}
        link="https://github.com/grogsy"
      />
      <HeaderItem
        headerName="Linkedin"
        icon={faLinkedin}
        link="linkedin"
        link="https://linkedin.com/brian2772"
      />
    </nav>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const LinkParser = ({ link, children, extraClasses }) => {
  let className = "react-link";
  if (extraClasses) {
    className = className + " " + extraClasses;
  }

  return link && link.startsWith("http") ? (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className={className}
    >
      {children}
    </a>
  ) : (
    <Link to={link ? `/${link}` : "/"} className={className}>
      {children}
    </Link>
  );
};

export default LinkParser;

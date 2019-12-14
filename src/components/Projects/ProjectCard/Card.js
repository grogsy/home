import React from "react";

const ProjectCard = ({ isClosed, children }) => {
  return <div className={isClosed ? "card" : "card fade-in"}>{children}</div>;
};

export default ProjectCard;

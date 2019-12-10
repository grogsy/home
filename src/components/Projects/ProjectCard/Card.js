import React from "react";

const ProjectCard = ({ isClosed, children }) => {
  return (
    <div
      className={isClosed ? "card" : "card fade-in"}
      style={{ width: "30rem" }}
    >
      {children}
    </div>
  );
};

export default ProjectCard;

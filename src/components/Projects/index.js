import React, { useEffect } from "react";
import ProjectContainer from "./ProjectCard/Container";
import data from "../data";
import "./styles.css";

const Projects = props => {
  useEffect(() => {
    document.title = "Brian's Projects";
  });
  return (
    <div className="project-main">
      {data.projects.map(project => (
        <ProjectContainer project={project} />
      ))}
    </div>
  );
};

export default Projects;

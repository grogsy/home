import React from "react";
import ProjectContainer from "./ProjectCard/Container";
import data from "../data";
import "./styles.css";

const Projects = props => {
  return (
    <div className="project-main">
      {data.projects.map(project => (
        <ProjectContainer project={project} />
      ))}
    </div>
  );
};

export default Projects;

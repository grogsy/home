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
      <h1>Here are a few projects I've worked on:</h1>
      {data.projects.map(project => (
        <ProjectContainer project={project} />
      ))}
    </div>
  );
};

export default Projects;

import React from "react";
import ProjectContainer from "./ProjectContainer";
import data from "../data";

const Projects = props => {
  return (
    <div className="project-main">
      {data.projects.map(project => (
        <ProjectContainer
          headerText={project.name}
          description={project.description}
          deployLink={project.deployLink}
          githubLink={project.githubLink}
          imgLink={project.imgLink}
        />
      ))}
    </div>
  );
};

export default Projects;

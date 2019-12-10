import React from "react";
import ProjectContainer from "./ProjectCard/Container";
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
          images={project.images}
        />
      ))}
    </div>
  );
};

export default Projects;

import React from "react";
import ProjectContainer from "./ProjectContainer";
import data from "../Landing/RightBox/data";

const Projects = props => {
  const project = data.projects[0];
  return (
    <div className="project-main">
      <div>
        <p>Projects Page</p>
        <ProjectContainer
          headerText={project.name}
          description={project.description}
          deployLink={project.deployLink}
          githubLink={project.githubLink}
          imgLink={project.imgLink}
        />
      </div>
    </div>
  );
};

export default Projects;

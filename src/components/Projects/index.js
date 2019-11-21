import React from "react";
import ProjectContainer from "./ProjectContainer";
import data from "../Landing/RightBox/data";

const Projects = props => {
  return (
    <div className="project-main">
      <div>
        <p>Projects Page</p>
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
    </div>
  );
};

export default Projects;

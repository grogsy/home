import React from "react";
import ProjectCard from "./ProjectCardTemplate";
import Modal from "./ModalExample";

const Projects = props => {
  return (
    <div className="project-main">
      <div>
        <p>Projects Page</p>
        <Modal />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;

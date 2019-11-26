import React, { useState } from "react";
import ProjectCard from "./ProjectCardTemplate";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectContainer = ({
  headerText,
  description,
  images,
  deployLink,
  githubLink
}) => {
  const [isClosed, toggleOpenClose] = useState(true);
  const [showModal, toggleModal] = useState(false);

  return (
    <div
      className={isClosed ? "project-container closed" : "project-container"}
    >
      <div
        className="card-header project-header"
        onClick={() => {
          toggleOpenClose(!isClosed);
        }}
      >
        <FontAwesomeIcon
          className={
            isClosed ? "topic-container-icon" : "topic-container-icon fade-in"
          }
          icon={isClosed ? faCaretRight : faCaretDown}
          size="lg"
        />
        <h5>
          <span className="badge">{headerText}</span>
        </h5>
      </div>
      <ProjectCard
        show={showModal}
        handleClose={() => {
          toggleModal(false);
        }}
        showModal={() => toggleModal(true)}
        isClosed={isClosed}
        headerText={headerText}
        description={description}
        images={images}
        deployLink={deployLink}
        githubLink={githubLink}
      />
    </div>
  );
};

export default ProjectContainer;

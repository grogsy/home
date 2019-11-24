import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ImageModal } from "../Layout";

const checkIfOpened = closed => {
  return closed ? "card" : "card fade-in";
};

const ProjectCard = ({
  show,
  handleClose,
  showModal,
  isClosed,
  imgLink,
  description,
  deployLink,
  githubLink
}) => {
  return (
    <div className={checkIfOpened(isClosed)} style={{ width: "35rem" }}>
      <ImageModal show={show} handleClose={handleClose} imgSrc={imgLink} />
      <img
        className="card-img-top"
        style={{ cursor: "zoom-in" }}
        src={imgLink}
        alt="ffff"
        onClick={showModal}
      />
      <div className="card-body example-custom-css">
        <p className="card-text">{description}</p>
        {deployLink ? (
          <a target="_blank" href={deployLink} className="btn btn-primary">
            View In Heroku
          </a>
        ) : (
          <p>No Deploy Link :(</p>
        )}
        <a target="_blank" href={githubLink}>
          <FontAwesomeIcon
            className="card-icon react-link"
            icon={faGithub}
            size="3x"
          />
        </a>
      </div>
    </div>
  );
};

ProjectCard.defaultProps = {
  deployLink: null
};

export default ProjectCard;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const checkIfOpened = closed => {
  return closed ? "card" : "card fade-in";
};

const ProjectCard = ({
  isClosed,
  imgLink,
  description,
  deployLink,
  githubLink
}) => {
  return (
    <div className={checkIfOpened(isClosed)} style={{ width: "35rem" }}>
      <img className="card-img-top" src={imgLink} alt="ffff" />
      <div className="card-body example-custom-css">
        <p className="card-text">{description}</p>
        <a target="_blank" href={deployLink} className="btn btn-primary">
          View In Heroku
        </a>
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

export default ProjectCard;

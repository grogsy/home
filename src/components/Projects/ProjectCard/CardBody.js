import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const CardBody = ({ description, deployLink, githubLink }) => {
  return (
    <div className="card-body bg-dark">
      <p className="card-text text-info">{description}</p>
      <a target="_blank" href={deployLink} className="btn btn-info">
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
  );
};

export default CardBody;

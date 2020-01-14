import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectDescription = ({ description, deployLink, githubLink }) => {
  return (
    <React.Fragment>
      <p className="card-text text-info">{description}</p>
      {deployLink ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={deployLink}
          className="btn btn-info"
        >
          Check It Out
        </a>
      ) : (
        <a className="btn btn-secondary disabled">
          This project isn't deployed :(
        </a>
      )}
      <a target="_blank" rel="noopener noreferrer" href={githubLink}>
        <FontAwesomeIcon
          className="card-icon react-link"
          icon={faGithub}
          size="3x"
          title="View Code on Github"
        />
      </a>
    </React.Fragment>
  );
};

export default ProjectDescription;

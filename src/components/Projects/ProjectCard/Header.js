import React from "react";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectHeader = ({ isClosed, toggleOpenClosed, headerText }) => {
  return (
    <div className="card-header project-header" onClick={toggleOpenClosed}>
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
  );
};

export default ProjectHeader;

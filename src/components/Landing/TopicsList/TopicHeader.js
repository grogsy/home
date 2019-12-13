import React from "react";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopicHeader = ({ isClosed, headerText, toggleClosed }) => {
  return (
    <div
      className={
        isClosed
          ? "card-header topic-header closed"
          : "card-header topic-header"
      }
      onClick={toggleClosed}
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
  );
};

export default TopicHeader;

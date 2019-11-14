import React from "react";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopicHeader = ({ isClosed, headerText, toggleClosed }) => {
  return (
    <div
      className={isClosed ? "gen-header" : "gen-header gen-header-opened"}
      onClick={toggleClosed}
    >
      <FontAwesomeIcon
        className={
          isClosed ? "topic-container-icon" : "topic-container-icon fade-in"
        }
        icon={isClosed ? faCaretRight : faCaretDown}
        size="lg"
      />
      <p>{headerText}</p>
    </div>
  );
};

export default TopicHeader;

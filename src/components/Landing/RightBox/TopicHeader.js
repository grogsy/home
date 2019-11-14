import React from "react";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopicHeader = ({ isClosed, headerText, toggleClosed }) => {
  return (
    <div className="gen-header" onClick={toggleClosed}>
      <FontAwesomeIcon
        className="topic-container-icon"
        icon={isClosed ? faCaretRight : faCaretDown}
        size="lg"
      />
      <p>{headerText}</p>
    </div>
  );
};

export default TopicHeader;

import React, { useState } from "react";

import TopicHeader from "./TopicHeader";
import TopicList from "./TopicList";

const TopicContainer = ({ headerText, listItems }) => {
  const initialState = {
    closed: true
  };

  const [state, setState] = useState(initialState);

  return (
    <div
      className={state.closed ? "topic-container closed" : "topic-container"}
    >
      <TopicHeader
        isClosed={state.closed}
        headerText={headerText}
        toggleClosed={() => {
          setState({ closed: !state.closed });
        }}
      />
      <TopicList isClosed={state.closed} list={listItems} />
    </div>
  );
};

export default TopicContainer;

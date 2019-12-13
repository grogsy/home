import React from "react";
import TopicContainer from "./TopicContainer";
import data from "../../data";

const RightBox = props => {
  return (
    <React.Fragment>
      {data.lists.map(item => (
        <TopicContainer
          className="topic-container"
          headerText={item.name}
          listItems={item.content}
        />
      ))}
    </React.Fragment>
  );
};

export default RightBox;

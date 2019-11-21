import React from "react";
import TopicContainer from "./TopicContainer";
import data from "../../data";

const RightBox = props => {
  return (
    <div className="right-box">
      {data.lists.map(item => (
        <TopicContainer
          className="topic-container"
          headerText={item.name}
          listItems={item.content}
        />
      ))}
    </div>
  );
};

export default RightBox;

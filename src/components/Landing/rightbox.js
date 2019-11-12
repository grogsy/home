import React from "react";
import TopicContainer from "./TopicContainer";

const RightBox = props => {
  return (
    <div className="right-box">
      <TopicContainer
        className="topic-container"
        headerText="Hobbies"
        listItems={["Programming", "Food"]}
      />
      <TopicContainer
        className="topic-container"
        headerText="Favorite Foods"
        listItems={["Curry", "Everything", "Taco Supreme"]}
      />
    </div>
  );
};

export default RightBox;

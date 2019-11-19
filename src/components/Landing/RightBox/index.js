import React from "react";
import TopicContainer from "./TopicContainer";
import data from "./data";

const RightBox = props => {
  return (
    <div className="right-box">
      <TopicContainer
        className="topic-container"
        headerText="Interesting Facts"
        listItems={data.interestingFacts}
      />
      <TopicContainer
        className="topic-container"
        headerText="Hobbies"
        listItems={data.hobbies}
      />
      <TopicContainer
        className="topic-container"
        headerText="Favorite Foods"
        listItems={data.favoriteFoods}
      />
      <TopicContainer
        className="topic-container"
        headerText="Dummy Data"
        listItems={["foo", "bar", "baz"]}
      />
    </div>
  );
};

export default RightBox;

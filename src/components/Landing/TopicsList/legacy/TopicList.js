import React from "react";

const getCorrectClassName = closed => {
  return closed ? "topic-list" : "topic-list fade-in";
};

const TopicList = ({ list, isClosed }) => {
  return (
    <div className={getCorrectClassName(isClosed)}>
      <ul className="list-group list-group-flush">
        {list.map(item => {
          return <li className="topic-list-item list-group-item">{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default TopicList;

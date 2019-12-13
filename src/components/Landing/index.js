import React from "react";

import TopicList from "./TopicsList";
import AboutMe from "./AboutMe";
import { ContainerSmall } from "../Layout";
import "./topic.css";
import "./about.css";

const Landing = () => {
  return (
    <div className="main">
      <ContainerSmall where="left">
        <AboutMe />
      </ContainerSmall>
      <ContainerSmall where="right">
        <TopicList />
      </ContainerSmall>
    </div>
  );
};

export default Landing;

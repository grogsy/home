import React, { useEffect } from "react";

import TopicList from "./TopicsList";
import AboutMe from "./AboutMe";
import { ContainerSmall } from "../Layout";
import "./main.css";

const Landing = () => {
  useEffect(() => {
    document.title = "Welcome to Brian's Website";
  });
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

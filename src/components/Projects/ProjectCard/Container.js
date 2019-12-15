import React, { useState } from "react";
import CardHeader from "./Header";
import Card from "./Card";
import CardBody from "./CardBody";
import ProjectDescription from "./ProjectDescription";
import { Carousel } from "../../Layout";

const ProjectContainer = ({
  headerText,
  description,
  images,
  deployLink,
  githubLink
}) => {
  const initialState = {
    closed: true,
    showModal: false
  };
  const [state, setState] = useState(initialState);
  // const [isClosed, toggleOpenClose] = useState(true);
  // const [showModal, toggleModal] = useState(false);

  return (
    <div
      className={
        state.closed ? "project-container closed" : "project-container"
      }
    >
      <CardHeader
        isClosed={state.closed}
        headerText={headerText}
        toggleOpenClosed={() => {
          setState({ closed: !state.closed });
        }}
      />
      <Card isClosed={state.closed}>
        <Carousel
          images={images}
          show={state.showModal}
          hideModal={() => {
            setState({ showModal: false });
          }}
          showModal={() => {
            setState({ showModal: true });
          }}
        />
        <CardBody>
          <ProjectDescription
            description={description}
            deployLink={deployLink}
            githubLink={githubLink}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectContainer;

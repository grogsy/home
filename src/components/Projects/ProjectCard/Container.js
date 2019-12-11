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
  const [isClosed, toggleOpenClose] = useState(true);
  const [showModal, toggleModal] = useState(false);

  return (
    <div
      className={isClosed ? "project-container closed" : "project-container"}
    >
      <CardHeader
        isClosed={isClosed}
        headerText={headerText}
        toggleOpenClosed={() => {
          toggleOpenClose(!isClosed);
        }}
      />
      <Card isClosed={isClosed}>
        <Carousel
          images={images}
          show={showModal}
          hideModal={() => {
            toggleModal(false);
          }}
          showModal={() => {
            toggleModal(true);
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

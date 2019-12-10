import React, { useState } from "react";
import CardHeader from "./Header";
import Card from "./Card";
import CardBody from "./CardBody";
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
        <CardBody
          description={description}
          deployLink={deployLink}
          githubLink={githubLink}
        />
      </Card>
    </div>
  );
};

export default ProjectContainer;

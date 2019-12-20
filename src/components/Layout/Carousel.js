import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

import ImageModal from "./ImageModal";
import "./styles/carousel.css";

const Carousel = ({ images, show, hideModal, showModal }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="carousel">
      <ImageModal show={show} handleClose={hideModal} imgSrc={images[active]} />
      <FontAwesomeIcon
        className="carousel-btn"
        icon={faChevronLeft}
        size="3x"
        onClick={() => {
          let idx = active - 1;
          if (idx < 0) idx = images.length - 1;
          setActive(idx);
        }}
      />
      <img
        className="card-img-top carousel-img"
        style={{ cursor: "zoom-in" }}
        src={images[active]}
        alt="Something wrong"
        onClick={showModal}
      />
      <FontAwesomeIcon
        className="carousel-btn"
        icon={faChevronRight}
        size="3x"
        onClick={() => {
          let idx = active + 1;
          if (idx >= images.length) idx = 0;
          setActive(idx);
        }}
      />
    </div>
  ); //
};

export default Carousel;

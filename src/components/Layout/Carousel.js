import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { ImageModal } from "./index";

class ModalCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.imgs,
      active: 0
    };
  }

  setActive = idx => {
    this.setState({ active: idx });
  };

  prev = () => {
    let active = this.state.active - 1;
    if (active < 0) {
      active = this.images.length - 1;
    }

    this.setActive(active);
  };

  next = () => {
    let active = this.state.active + 1;
    if (active >= this.images.length) {
      active = 0;
    }

    this.setActive(active);
  };

  render() {
    return (
      <div>
        <ImageModal
          show={this.props.show}
          handleClose={this.props.handleClose}
          imgSrc={this.state.images[this.state.active]}
        />
        <FontAwesomeIcon icon={faChevronLeft} size="lg" onClick={this.prev()} />
        <img
          className="card-img-top"
          style={{ curser: "zoom-in" }}
          src={this.state.images[this.state.active]}
          alt="Something wrong"
          onClick={this.props.showModal}
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          size="lg"
          onClick={this.next()}
        />
      </div>
    ); //
  }
}

export default ModalCarousel;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { ImageModal } from "./index";

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
        className="card-img-top"
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

// class Carousel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       images: this.props.imgs,
//       active: 0
//     };
//   }

//   setActive = idx => {
//     this.setState({ active: idx });
//   };

//   prev = () => {
//     let idx = this.state.active - 1;
//     if (idx < 0) {
//       idx = this.images.length - 1;
//     }

//     this.setActive(idx);
//   };

//   next = () => {
//     let idx = this.state.active + 1;
//     if (idx >= this.images.length) {
//       idx = 0;
//     }

//     this.setActive(idx);
//   };

//   render() {
//     return (
//       <div>
//         <ImageModal
//           show={this.props.show}
//           handleClose={this.props.handleClose}
//           imgSrc={this.state.images[this.state.active]}
//         />
//         <FontAwesomeIcon icon={faChevronLeft} size="lg" onClick={this.prev()} />
//         <img
//           className="card-img-top"
//           style={{ cursor: "zoom-in" }}
//           src={this.state.images[this.state.active]}
//           alt="Something wrong"
//           onClick={this.props.showModal}
//         />
//         <FontAwesomeIcon
//           icon={faChevronRight}
//           size="lg"
//           onClick={this.next()}
//         />
//       </div>
//     ); //
//   }
// }

export default Carousel;

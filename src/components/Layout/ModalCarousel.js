import React from "react";

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
    return; //
  }
}

export default ModalCarousel;

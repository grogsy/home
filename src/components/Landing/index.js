import React from "react";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

export default class Landing extends React.Component {
  state = {
    show: false
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="main">
        <LeftBox
          showModal={this.showModal}
          hideModal={this.hideModal}
          show={this.state.show}
        />
        <RightBox />
      </div>
    );
  }
}

import React from "react";
import RightBox from "./RightBox";
import { ContainerSmall, ImageModal } from "../Layout";

let me =
  "https://scontent.fewr1-2.fna.fbcdn.net/v/t1.15752-9/s2048x2048/76618293_549823525585525_5234997996277465088_n.jpg?_nc_cat=111&_nc_oc=AQlSpP7Y3-nEWSNFOL6CPlVhegz0FMZtAV0VOeQLfC_HX20xm6bD2k2kcmVVjjvjEkg&_nc_ht=scontent.fewr1-2.fna&oh=4c66c2eaf36cc4a1cda6139f7c4509fa&oe=5E58DA07";

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
        <ContainerSmall where="left">
          <p>Hi I'm Brian!</p>
          <p>Welcome to my Website</p>
          <p>I'm using this as a playground to try out front-end things</p>
          <p>Me messing with python: </p>
          <div id="me-container">
            <ImageModal
              show={this.props.show}
              handleClose={this.props.hideModal}
              imgSrc={me}
            />
            <img
              className="modal-image"
              src={me}
              alt="me"
              width="500"
              height="300"
              onClick={this.props.showModal}
            />
          </div>
        </ContainerSmall>
        <RightBox />
      </div>
    );
  }
}

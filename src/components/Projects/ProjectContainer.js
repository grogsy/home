import React from "react";
import ProjectCard from "./ProjectCardTemplate";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ProjectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      closed: true,
      showModal: false
    };
  }

  toggleClosed = () => {
    this.setState({ closed: !this.state.closed });
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  isClosed = () => {
    return this.state.closed ? "project-container closed" : "project-container";
  };

  render() {
    return (
      <div className={this.isClosed()}>
        <div
          className={
            this.state.closed
              ? "card-header project-header"
              : "card-header project-header"
          }
          onClick={this.toggleClosed}
        >
          <FontAwesomeIcon
            className={
              this.state.closed
                ? "topic-container-icon"
                : "topic-container-icon fade-in"
            }
            icon={this.state.closed ? faCaretRight : faCaretDown}
            size="lg"
          />
          <h5>
            <span className="badge">{this.props.headerText}</span>
          </h5>
        </div>
        <ProjectCard
          show={this.state.showModal}
          handleClose={this.hideModal}
          showModal={this.showModal}
          isClosed={this.state.closed}
          headerText={this.props.headerText}
          description={this.props.description}
          imgLink={this.props.imgLink}
          deployLink={this.props.deployLink}
          githubLink={this.props.githubLink}
        />
      </div>
    );
  }
}

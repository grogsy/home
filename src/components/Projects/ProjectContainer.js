import React from "react";
import ProjectCard from "./ProjectCardTemplate";

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
        <ProjectCard
          isClosed={this.state.closed}
          headerText={this.props.headerText}
          description={this.props.description}
          deployLink={this.props.description}
          githubLink={this.props.githubLink}
        />
      </div>
    );
  }
}

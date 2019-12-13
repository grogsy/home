import React from "react";

import TopicHeader from "./TopicHeader";
import TopicList from "./TopicList";

/**
 * TODO: Change to state hook
 */

class TopicContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      closed: true
    };

    this.toggleClosed = this.toggleClosed.bind(this);
  }

  toggleClosed() {
    this.setState({ closed: !this.state.closed });
  }

  isClosed = () => {
    return this.state.closed
      ? `${this.props.className} closed`
      : this.props.className;
  };

  render() {
    return (
      <div className={this.isClosed()}>
        <TopicHeader
          isClosed={this.state.closed}
          headerText={this.props.headerText}
          toggleClosed={this.toggleClosed}
        />
        <TopicList isClosed={this.state.closed} list={this.props.listItems} />
      </div>
    );
  }
}

export default TopicContainer;

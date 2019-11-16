import React from "react";

import TopicHeader from "./TopicHeader";
import TopicList from "./TopicList";

class TopicContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: props.listItems,
      headerText: props.headerText,
      closed: true
    };

    this.toggleClosed = this.toggleClosed.bind(this);
  }

  toggleClosed() {
    this.setState({ closed: !this.state.closed });
  }

  isClosed = state => {
    return state.closed ? `${this.props.className} closed` : state.className;
  };

  render() {
    return (
      <div className={this.isClosed(this.state)}>
        <TopicHeader
          isClosed={this.state.closed}
          headerText={this.state.headerText}
          toggleClosed={this.toggleClosed}
        />
        <TopicList isClosed={this.state.closed} list={this.state.listItems} />
      </div>
    );
  }
}

export default TopicContainer;

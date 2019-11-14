import React from "react";

import TopicHeader from "./TopicHeader";

class TopicContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: props.listItems,
      className: props.className,
      headerText: props.headerText,
      closed: true
    };

    this.toggleClosed = this.toggleClosed.bind(this);
  }

  toggleClosed() {
    this.setState({ closed: !this.state.closed });
  }

  render() {
    return (
      <div
        className={
          this.state.closed
            ? this.state.className + " closed"
            : this.state.className
        }
      >
        <TopicHeader
          isClosed={this.state.closed}
          headerText={this.state.headerText}
          toggleClosed={this.toggleClosed}
        />

        <div className={this.state.closed ? "gen-list" : "gen-list fade-in"}>
          <ul>
            {this.state.listItems.map(item => {
              return <li className="gen-list-item">{item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default TopicContainer;

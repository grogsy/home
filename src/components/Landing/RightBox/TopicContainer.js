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

        <div
          className={
            this.state.closed ? "gen-list card" : "gen-list fade-in card"
          }
        >
          <ul className="list-group list-group-flush">
            {this.state.listItems.map(item => {
              return <li className="gen-list-item list-group-item">{item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default TopicContainer;

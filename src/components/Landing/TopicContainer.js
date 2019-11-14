import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";

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
        <div className="gen-header" onClick={this.toggleClosed}>
          <FontAwesomeIcon
            icon={this.state.closed ? faCaretRight : faCaretDown}
            className={
              this.state.closed
                ? "topic-container-icon"
                : "topic-container-icon fade-in"
            }
            size="lg"
          />
          <p>{this.state.headerText}</p>
        </div>
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

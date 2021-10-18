import React, { Component } from "react";

export default class LightSwitch extends Component {
  constructor() {
    super();
    this.state = {
      toggled: true,
    };
  }

  handleClick = () => {
    this.setState((previousState) => {
      return {
        toggled: !previousState.toggled,
      };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.toggled ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}

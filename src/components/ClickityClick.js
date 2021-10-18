// Code ClickityClick Component Here
import React, { Component } from "react";

export default class ClickityClick extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((previousState) => {
      return {
        hasBeenClicked: true,
        count: previousState.count + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>{this.state.count}</button>
      </div>
    );
  }
}

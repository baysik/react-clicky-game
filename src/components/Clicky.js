import React, { Component } from "react";

export default class Clicky extends Component {
  state = { count: 0 };
  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return <div onClick={this.onClick}>Click ME {this.state.count}</div>;
  }
}

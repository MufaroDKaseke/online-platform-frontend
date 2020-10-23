import React, { Component } from "react";
import State from "../Models/state";

class WelcomeComponent extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = new State();
  }

  render() {
    return <p>Welcome</p>;
  }
}

export default WelcomeComponent;

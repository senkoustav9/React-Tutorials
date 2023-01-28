import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sen",
    };
    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA Static");
    return null;
  }

  componentDidMount() {
    // this function executes at end
    console.log("LifeCycleA Component did Mount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycle A shouldComponent Update")
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycle A getSnapShotBeforeUpdate");
    return null;
  }
  
  componentDidUpdate() {
    console.log("LifeCycle A Updated")
  }

  changeState = (event) => {
    this.setState({
      name: 'Koustav'
    })
  }

  render() {
    console.log("LifeCycle A Rendered");
    return (
      <div>
        <h1>LifeCycle A</h1>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;

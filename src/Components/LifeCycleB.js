import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sen",
    };
    console.log("LifeCycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB Static");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB Component did Mount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycle B shouldComponent Update")
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycle B getSnapShotBeforeUpdate")
    return null;
  }
  
  componentDidUpdate() {
    console.log("LifeCycle B Updated")
  }

  render() {
    console.log("LifeCycle B Rendered");
    return <div>LifeCycle B</div>;
  }
}

export default LifeCycleB;

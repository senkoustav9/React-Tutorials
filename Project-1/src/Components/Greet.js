import React, { Component } from "react";
import Child from "./Child";

class Greet extends Component {
  constructor() {
    super();

    this.state = {
      parentName: "Parent",
      email: "",
    };

    this.greetParent = this.greetParent.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
  }
  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  changeEmailHandler(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <div>
        <Child parentHandler={this.greetParent}>
          Greet Parent
        </Child>
        <input
            type="text"
            value={this.state.email}
            onChange={this.changeEmailHandler}
          />
      </div>
    );
  }
}

export default Greet;
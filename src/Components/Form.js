import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      topic: "react"
    };
  }
  // either mention the binding in constructor or declare with arrow functions
  changeHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  changeOptions = (event) => {
    this.setState({
        topic: event.target.value
    })
  }

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.topic}`)
    event.preventDefault();  
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={this.state.username}
          onChange={this.changeHandler}
        />
        <label>Topic</label>
        <select value = {this.state.topic}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;

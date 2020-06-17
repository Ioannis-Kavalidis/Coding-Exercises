import React, { Component } from "react";
//import  {}  from "./helpers";

//   -- DO NOT DO --
//import '../../../scss/main.scss';
//import Data from './data.json'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      result: "",
    };
    this.handleChange = (event) => {
      this.setState({
        userInput: event.target.value,
      });
    };
    this.validate = (email) => {
      const regex = /^[A-Za-z\.\-\_]+@\w+\.[A-Za-z]{1,6}$/;
      return regex.test(email);
    };
    this.handleSubmit = (e) => {
      e.preventDefault();
      const entry = this.state.userInput;
      this.setState({
        result: this.validate(entry) ? "valid" : "invalid",
      });
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hi I am React</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange}
          />
          <input type="submit" value="Check" />
        </form>
        <div>Your Email is {this.state.result}</div>
        {
          // this is how your images.js should have, and not more
          // <div className="container">
          //    <img src={`${this.props.imgData.url}`} alt={this.props.imgData.name} key={this.props.imgData.id} className="instImg"/>
          // </div>
        }
      </React.Fragment>
    );
  }
}

import React, { Component } from "react";
//import  {}  from "./helpers";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      userInput=""
      result = ""
    }
    this.handleChange=(e)=>{
      this.setState({
        userInput: e.target.value
      })
    }
    this.handleSubmit=(e)=>{}
  }
  // also state should be here in the constructor if you need it 🤓
  render() {
    return (
      <React.Fragment>
        <h1>Hi I am React</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.userInput} onChange={this.handleChange} />
          <input type="submit" value="Check" />
        </form>
        <div>Your email is </div>
      </React.Fragment>
    );
  }
}

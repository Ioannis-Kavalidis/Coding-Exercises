import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
    this.text = "";
  }
  login = () => {
    this.setState({ userName: "Ali" });
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ userName: "Nancy" });
    }, 1000);
  }
  componentDidUpdate() {
    this.text = "I run after the update has been rendered in the Dom";
  }
  shouldComponentUpdate() {
    return true;
  }
  render() {
    return (
      <React.Fragment>
        <h1>Hey {this.state.userName}, I am React</h1>
        <h4>{this.text}</h4>
        <button onClick={this.login}> Login</button>
      </React.Fragment>
    );
  }
}

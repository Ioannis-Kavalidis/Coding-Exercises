import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
    this.text = "";
  }

  click = () => {
    this.setState({ username: "Ali" });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ username: "Aris" });
    }, 2000);
  }

  componentDidUpdate() {
    this.text = "I run after the updates has been rendered in the DOM";
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hey {this.state.username}, did you know that...</h1>
        <h4>{this.text}</h4>
        <button onClick={this.click}>Click me</button>
      </React.Fragment>
    );
  }
}

import React, { Component, Fragment } from "react";
import { increment, decrement, changeName } from "../actions";
import { connect } from "react-redux";

class ChildComponent extends Component {
  render() {
    const { store, increment, decrement, changeName } = this.props;
    // console.log(store);
    console.log(this.props);

    return (
      <Fragment>
        <h4>I am a chid component</h4>
        <button onClick={() => changeName("Ali")}>Click me</button>
        <hr />
        {store.counter}
        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
      </Fragment>
    );
  }
}

const mapStateToProps = (store) => {};
const mapDispatchToProps = {
  increment,
  decrement,
  changeName,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChildComponent);

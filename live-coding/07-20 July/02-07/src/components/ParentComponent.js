import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { increment, decrement, changeName } from "../actions";

import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  render() {
    const { store } = this.props;
    // console.log(store);

    return (
      <Fragment>
        <ChildComponent store={store} />
      </Fragment>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    store,
  };
};

export default connect(mapStateToProps)(ParentComponent);

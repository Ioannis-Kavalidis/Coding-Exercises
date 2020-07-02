const allReducers = (state, action) => {
  console.log();

  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };

    case "CHANGE_NAME":
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};

export default allReducers;

import React from "react";
import Text from "./Text";

const App = () => {
  return (
    <React.Fragment>
      <h1>Hi, I am React app</h1>
      <Text name="Hadi" age="30" />
      <Text name="Ali" age="23" />
      <Text name="Eli" />
      <Text name="Karo" />
      {
        // commenting in React
      }
    </React.Fragment>
  );
};

export default App;

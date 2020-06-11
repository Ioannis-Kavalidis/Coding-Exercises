import React from "react";
import { Text, Hello } from "./Text";

const userLogin = true;
const names = ["Ali", "Hadi", "Lia", "Sofia"];

const App = () => {
  const listName = names.map((name, i) => <li key={i}>{name}</li>);

  return (
    <React.Fragment>
      <h1>Hi, I am React app</h1>
      <Text name={userLogin ? "Hi Hadi" : "IKD"} age="30" />
      <ul>{listName}</ul>
      {
        // commenting in React
        /*more comments
          <Text name="Hadi" age="30" />
          <Text name="Ali" age="23" />
          <h1>{userLogin ? "Hi Hadi" : "Login please"}</h1>
        */
      }
    </React.Fragment>
  );
};

export default App;

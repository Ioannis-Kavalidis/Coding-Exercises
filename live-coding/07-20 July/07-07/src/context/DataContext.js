import React, { useState, createContext } from "react";

const DataContext = createContext();

const DataProvider = (props) => {
  const [data, setData] = useState([
    { name: "Ali", age: 22 },
    { name: "Hadi", age: 25 },
    { name: "Evi", age: 28 },
  ]);
  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };

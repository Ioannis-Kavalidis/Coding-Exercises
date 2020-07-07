import React, { Fragment, useContext } from "react";
import { DataContext, DataProvider } from "../context/DataContext";
import InfoDetails from "./InfoDetails";

const Info = () => {
  const [data, setData] = useContext(DataContext);
  console.log(data);

  return (
    <Fragment>
      <h2>Info</h2>
      {data.map((item, i) => (
        <InfoDetails item={item} key={i} />
      ))}
    </Fragment>
  );
};

export default Info;

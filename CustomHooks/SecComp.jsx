import React from "react";
import UseCustom from "./UseCustom";

const SecComp = () => {
  const { data, error } = UseCustom("url");
  if (error) {
    return <div>Error:{error.message}</div>;
  }

  return (
    <div>
      {data.map((item) => {
        <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default SecComp;

import React, { useContext } from "react";
import UseContext from "./UseContext";
import { MyContexts } from "./Data";

const Index2 = () => {
 const Subject = useContext(MyContexts);
  return (
    <div>
      <h1>Subject is :{Subject}</h1>
    </div>
  );
};

export default Index2;

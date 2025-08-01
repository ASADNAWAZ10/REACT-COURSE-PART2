import React, { useState } from "react";
import "./App.css";
import Child1 from "./REACTFULLCOURSE/LIFTING STATE/Child1";
import Child2 from "./REACTFULLCOURSE/LIFTING STATE/Child2";

function Parent() {
  const [count, setcount] = useState(0);

  const ParentComp = () => {
    setcount(count+3)
    console.log(ParentComp)
  };

  const parentcomp2 = () => {
    setcount(count-1)
  };
  return (
    <>
      <Child1 count={count} ParentComp={ParentComp} parentcomp2={parentcomp2} />
      <Child2 count={count} />
    </>
  );
}
export default Parent;

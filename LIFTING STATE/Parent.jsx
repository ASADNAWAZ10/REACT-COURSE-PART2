import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () => {
  const [count, setcount] = useState(0);

  const Increment = () => {
    setcount(count + 1);
  };

  const Decrement = () => {
    setcount(count - 1);
  };
  return (
    <div>
      <Child1 count={count} Incre={Increment} Decre={Decrement} />
      <Child2 count={count} />
    </div>
  );
};

export default Parent;

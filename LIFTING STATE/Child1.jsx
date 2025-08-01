import React from "react";

const Child1 = ({ count, Incre, Decre }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onChange={Incre}>Increment</button>
      <button onChange={Decre}>Decrement</button>
    </div>
  );
};

export default Child1;

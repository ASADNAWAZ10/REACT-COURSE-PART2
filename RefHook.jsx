import React, { useRef, useState } from "react";
//UseRef: it's powerful tool which used to access the DOM elements and store mutable
//values.

function RefHook() {
  const [count, setcount] = useState(0);
  const Countref = useRef(count);

  const handlebtn = () => {
    Countref.current++;
    setcount(Countref.current);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handlebtn}>clickMe</button>
    </div>
  );
}

export default RefHook;

import React, { useState, useTransition } from "react";
//Transtion Hook is that feature, which use for suspense during change state.

const TranstionHook = () => {
  const [ispending, startTranstion] = useTransition();
  const [count, setCount] = useState(0);

  const handeClick = () => {
    startTranstion(() => {
      setCount(count + 1);
    });
  };

  return (
    <div>
      <h1>Here is a Transtion Hook</h1>
      <button onClick={handeClick}>ClickMe</button>
      {ispending ? <h1>Loading....</h1> : <h1>{count}</h1>}
    </div>
  );
};

export default TranstionHook;

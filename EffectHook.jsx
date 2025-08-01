import React, { useEffect, useState } from "react";

// useEffect: we use useEffect to handle side effect of functional components.
// side effect like api calls, DOM Munipulations, and timer functions.

const EffectHook = () => {
  const [count, Setcount] = useState(0);
  const [data, Setdata] = useState(0);

  function Colling() {
    console.log("colling the function...");
  }
  //   Colling(); //it render with everytask.

  // useEffect(()=>{
  // Colling();  //mounting phase only.
  // },[]);

  useEffect(() => {
    Colling(); //here it will not render everytime.
  }, [data]); //.So this is also update phase only.
  return (
    <div>
      <button onClick={() => Setcount(count + 3)}>counter{count}</button>
      <button onClick={() => Setdata(data + 1)}>Data{data}</button>
    </div>
  );
};

export default EffectHook;

import React, { useId } from "react";

const UseId = () => {
  const Id = useId();
  const name = useId();

  //for mulitple fields we use like:
  const user = useId();
  return (
    <div>
      <label htmlFor={Id}>Name:</label>
      <input id={Id} type="text" />
      <input type="text" id={name} placeholder="enter your text" />
      //for mulitple we use like:
      <input type="text" id={user + "name"} placeholder="enter your text" />
      <h1 id={user + "heading"}>Hello</h1>
      <button onClick={user + "submit"}>click me</button>
    </div>
  );
};

export default UseId;

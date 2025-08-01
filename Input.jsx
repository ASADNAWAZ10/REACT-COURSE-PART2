import React, { useState } from "react";

const Input = () => {
  const [val, Setval] = useState("Asad Nawaz");
  return (
    <div>
      <h1>Input field</h1>
      <h3>{val}</h3>
      <input
        type="text"
        onChange={(e) => Setval(e.target.value)}
        placeholder="Enter your text"
        value={val}
      />
      <button onClick={() => Setval("")}>clear</button>
    </div>
  );
};

export default Input;

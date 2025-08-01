import React from "react";

const User = ({ printName, name, getuser }) => {
  return (
    <div>
      <h1>{printName(name)}</h1>
      <button onClick={getuser()}>clickMe</button>
    </div>
  );
};

export default User;

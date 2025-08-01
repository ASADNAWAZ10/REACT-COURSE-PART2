import React from "react";
import "./App.css";
import User from "./User";

const displayName = (name) => {
  alert(name);
};

const getuser = () => {
  console.log("colled getuser");
};

function Ap() {
  return (
    <>
      <User printName={displayName} name="asad" getuser={getuser} />
      <User printName={displayName} name="Umar" getuser={getuser} />
      <User printName={displayName} name="Aqib" getuser={getuser} />
      <User printName={displayName} name="Aamir" getuser={getuser} />
    </>
  );
}
export default Ap;

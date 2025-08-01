import React, { useState } from "react";
import "./Validation.css";

const Validation = () => {
  const [passErr, setpassErr] = useState("");
  const [nameErr, setnameErr] = useState("");

  const handleName = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 5) {
      setnameErr("please enter valid username, only 5 characters");
    } else {
      setnameErr("");
    }
  };

  const handlePassword = (e) => {
    let regex = /^[A-z0-9]+$/i; //
    if (regex.test(e.target.value)) {
      setpassErr();
    } else {
      setpassErr("please enter valid password");
    }
  };

  return (
    <div>
      <input
        className={nameErr ? "error" : ""}
        onChange={handleName}
        type="text"
        placeholder="enter text"
      />
      <span>nameErr && nameErr</span>
      <input
        className={passErr ? "error" : ""}
        onChange={handlePassword}
        type="password"
        placeholder="enter password"
      />
      <span className="red-color">{passErr && passErr}</span>
      <button disabled={passErr || nameErr}>Login</button>
    </div>
  );
};

export default Validation;

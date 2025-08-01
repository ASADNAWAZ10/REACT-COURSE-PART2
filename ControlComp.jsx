import React, { useState } from "react";

const ControlComp = () => {
  const [text, Settext] = useState("");
  const [password, Setpassword] = useState("");
  const [email, Setemail] = useState("");
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Enter your text"
          value={text}
          onChange={(e) => Settext(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => Setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => Setpassword(e.target.value)}
        />
        <button>submit</button>
        <button
          onClick={() => {
            Setemail("");
            Setpassword("");
            Settext("");
          }}
        >
          clear
        </button>

        <h2>{text}</h2>
        <h2>{password}</h2>
        <h2>{email}</h2>
      </form>
    </div>
  );
};

export default ControlComp;

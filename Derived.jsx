import React, { useState } from "react";

//Derived: derived are those which derived from onthor props and state

const Derived = () => {
  const [users, setusers] = useState([]);
  const [user, setuser] = useState("");

  const hanldeAddusers = () => {
    setusers([...users, user]);
  };
  const total = users.length;
  const last = users[users.length - 1];
  const unique = [...new Set(users)].length;

  return (
    <div>
      <h2>Total User: {total}</h2>
      <h2>Last user: {last}</h2>
      <h2>Unique: {unique}</h2>
      <input
        type="text"
        onChange={(e) => setuser(e.target.value)}
        placeholder="enter text"
      />
      <button onClick={hanldeAddusers}>clickMe</button>
      {users.map((items, index) => {
        <h3 key={index}>{items}</h3>;
      })}
    </div>
  );
};

export default Derived;

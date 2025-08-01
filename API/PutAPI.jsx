import React, { useState } from "react";

const PutAPI = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");

  const url = "http://localhost:3000/users";

  const UpdateData = (id) => {
    const data = fetch(url + "/" + id, {
      method: "put",
      body: JSON.stringify({ name, email, age }),
    });
    const response = data.json();
    console.log(response);
    setname(response.name);
    setemail(response.email);
    setage(response.age);
  };
  return (
    <div>
      <input
        onChange={(e) => setname(e.target.value)}
        value={name}
        type="text"
        placeholder="enter name"
      />
      <input
        onChange={(e) => setemail(e.target.value)}
        value={email}
        type="email"
        placeholder="enter email"
      />
      <input
        onChange={(e) => setage(e.target.value)}
        value={age}
        type="number"
        placeholder="enter your age"
      />
    </div>
  );
};

export default PutAPI;

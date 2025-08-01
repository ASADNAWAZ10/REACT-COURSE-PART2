import React, { useState } from "react";

const PostAPI = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState();

  const url = "http://localhost:3000/users";

  const CreateData = async () => {
    const data = await fetch(url, {
      method: "post",
      body: JSON.stringify({ name, email, age }),
    });
    const response = await data.json();
    if (response) {
      alert("New User added");
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setname(e.target.value)}
        type="text"
        placeholder="enter name"
      />
      <input
        onChange={(e) => setemail(e.target.value)}
        type="email"
        placeholder="enter email"
      />
      <input
        onChange={(e) => setage(e.target.value)}
        type="number"
        placeholder="enter age"
      />
    </div>
  );
};

export default PostAPI;

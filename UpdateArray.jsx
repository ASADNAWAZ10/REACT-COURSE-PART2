import React, { useState } from "react";

const UpdateArray = () => {
  const [data, setData] = useState(["Asad", "Umar", "Aqib", "Aamir"]);

  const hanldeUser = (name) => {
    data[data.length - 1] = name;
    console.log(data);
    setData([...data]);
  };

  const [detail, setDetail] = useState([
    { name: "Asad Nawaz", Age: 23, email: "asadnawaz311@gamil.com" },
    { name: "Sajjad Ahmad", Age: 23, email: "Sajjad311@gamil.com" },
    { name: "Sabir khan", Age: 21, email: "Sabirkhan311@gmail.com" },
  ]);

  const hanldeAge = (age) => {
    detail[detail.length - 1].Age = age;
    console.log(detail);
    setDetail([...detail]);
  };
  return (
    <div>
      <h1>Updating Array in state</h1>
      <input
        type="text"
        placeholder="Enter your text"
        onChange={(e) => hanldeUser(e.target.value)}
      />
      {data.map((item, index) => {
        <h3 key={index}>{item}</h3>;
      })}
      <hr />

      <input
        type="text"
        placeholder="enter your age"
        onChange={(e) => hanldeAge(e.target.value)}
      />
      {detail.map((items, index) => {
        <h2 key={index}>
          {items.name},{items.Age}
        </h2>;
      })}
    </div>
  );
};

export default UpdateArray;

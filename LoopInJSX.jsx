import React from "react";

const LoopInJSX = () => {
  const userdata = [
    {
      name: "Asad",
      age: "23",
      college_name: "APSACS Sargodha",
    },
    {
      name: "Sabir",
      age: "23",
      college_name: "Sadda college",
    },
    {
      name: "Sijjad",
      age: "23",
      college_name: "Degree college",
    },
  ];
  return (
    <div>
      <h1>look in jsx with map function</h1>
      <table border="1">
        <thead>
          <tr>
            <td>name</td>
            <td>age</td>
            <td>college_name</td>
          </tr>
        </thead>
        <tbody>
          {userdata.map((item, index) => {
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.college_name}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LoopInJSX;

import React from "react";

const ReuseComp = () => {
  const userData = [
    {
      name: "Umar",
      age: "18",
      college_name: "kohisar college",
    },
    {
      name: "Asad",
      age: "23",
      college_name: "APSACS",
    },
    {
      name: "Aqib",
      age: "25",
      college_name: "APSACS",
    },
    {
      name: "Aamir",
      age: "27",
      college_name: "Islamia college peshawar",
    },
  ];
  return (
    <div>
      <h1>reuse component</h1>
      {userData.map((user) => {
        <div>{user.name}</div>;
      })}
    </div>
  );
};

export default ReuseComp;

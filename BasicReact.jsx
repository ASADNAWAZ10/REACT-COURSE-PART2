import React, { useState } from "react";

function BasicReact() {
  const username = "asad nawaz";
  let x = 20;
  let y = 40;

  let obj = {
    name: "asad nawaz",
    age: 23,
    email: "asad@gamil.com",
  };

  let CollegeArray = ["IET", "DU", "IIT", "APSACS"];
  const [student, setstudent] = useState();
  return (
    <div>
      <h1>{username}</h1>
      <h2>{x + y}</h2>
      <h2>{30 + 40 + 30}</h2>
      <button onClick={() => alert("hello")}>ClickMe</button>
      <User UserObj={obj} />
      <CollegeUser data={CollegeArray[0]} />
      <CollegeUser data={CollegeArray[1]} />
      <CollegeUser data={CollegeArray[2]} />
      <CollegeUser data={CollegeArray[3]} />
      {student && <student name={student} />} //if data in student then show
      student if not, no show student.
      <button onClick={() => setstudent("Tony")}>Button</button>
    </div>
  );
}

export default BasicReact;

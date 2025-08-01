import React, { useState } from "react";

const Checbox = () => {
  const [skills, Setskills] = useState([]);

  const handleskills = (e) => {
    console.log(e.target.value, e.target.checked);
    if (e.target.checked) {
      Setskills([...skills, e.target.value]);
    } else {
      Setskills([...skills.filter((item) => item != e.target.value)]);
    }
  };
  return (
    <div>
      <h1>Checkboxs in React.js</h1>
      <input type="checkbox" id="php" value="php" onChange={handleskills} />
      <label htmlFor="php">PhP</label>
      <br /> <br />
      <input type="checkbox" id="JS" value="JS" onChange={handleskills} />
      <label htmlFor="JS">JS</label>
      <br /> <br />
      <input type="checkbox" id="java" value="java" onChange={handleskills} />
      <label htmlFor="java">Java</label>
      <br /> <br />
      <input
        type="checkbox"
        id="python"
        value="python"
        onChange={handleskills}
      />
      <label htmlFor="python">Python</label>
      <h1>{skills.toString()}</h1>
    </div>
  );
};

export default Checbox;

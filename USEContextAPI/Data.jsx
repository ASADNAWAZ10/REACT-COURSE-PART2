import React, { useState } from "react";
import Index2 from "./Index2";
import { MyContexts } from "./UseContext";

const Data = () => {
  const [subject, setsubject] = useState();
  return (
    <div>
      <h1>Here is a data:</h1>
      <MyContexts.Provider value={subject}>
        <select value={subject} onChange={(e) => setsubject(e.target.value)}>
          <option value="">select subject</option>
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
          <option value="Pashto">Pashto</option>
        </select>
        <button onChange={() => setsubject("")}>Clear</button>
        <Index2 />
      </MyContexts.Provider>
    </div>
  );
};

export default Data;

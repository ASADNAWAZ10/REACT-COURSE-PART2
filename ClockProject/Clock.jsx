import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, Settime] = useState(0);
  const [color, Setcolor] = useState("red");

  useEffect(() => {
    setInterval(() => {
      Settime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div>
      <h1>Digital clock</h1>
      <h1 className="text-green-400 bg-black w-[100px] rounded-xl p-2">
        {time}
      </h1>
      <select onChange={(e) => Setcolor(e.target.value)}>
        <option value={"red"}>Red</option>
        <option value={"blue"}>blue</option>
        <option value={"green"}>green</option>
        <option value={"orange"}>orange</option>
      </select>
      <Clock color={color} />
    </div>
  );
};

export default Clock;

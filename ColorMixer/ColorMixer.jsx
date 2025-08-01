import React, { useState } from "react";

function ColorMixer() {
  const Colors = JSON.parse(localStorage.getItem("Color"));
  const [r, setR] = useState(Colors && Colors.r ? Colors.r : 0);
  const [g, setG] = useState(Colors && Colors.g ? Colors.g : 0);
  const [b, setB] = useState(Colors && Colors.b ? Colors.b : 0);

  const save = () => {
    console.log("Saved");
    localStorage.setItem("Color", JSON.stringify({ r, g, b }));
  };
  return (
    <div>
      <h1>Color Mixer</h1>
      <div
        style={{
          backgroundColor: "rgb(" + r + ", " + g + ", " + b + ")",
          height: "200px",
          width: "200px",
        }}
      ></div>
      <label htmlFor="">Red</label>
      <input
        type="range"
        value={r}
        onChange={(e) => setR(e.target.value)}
        min={0}
        max={255}
      />
      <br />
      <br />
      <label htmlFor="">Green</label>
      <input
        type="range"
        value={g}
        onChange={(e) => setG(e.target.value)}
        min={0}
        max={255}
      />
      <br />
      <br />
      <label htmlFor="">Blue</label>
      <input
        type="range"
        value={b}
        onChange={(e) => setB(e.target.value)}
        min={0}
        max={255}
      />
      <br />
      <br />
      <button
        className="p-1 bg-pink-400 rounded font-bold border-2"
        onClick={save}
      >
        SaveColor
      </button>
    </div>
  );
}

export default ColorMixer;

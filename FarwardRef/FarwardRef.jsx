import React, { useRef } from "react";
import FarwardRef2 from "./FarwardRef2";

// we use farwardref for pass ref from parent component to child component.

const FarwardRef = () => {
  const inputref = useRef(null);

  const updateInput = () => {
    inputref.current.value = 1000;
    inputref.current.focus();
    inputref.current.style.color = "red";
  };
  return (
    <div>
      <FarwardRef2 ref={inputref} />
      <button onClick={updateInput}>updateButton</button>
    </div>
  );
};

export default FarwardRef;

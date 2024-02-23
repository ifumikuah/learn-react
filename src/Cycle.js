import React, { useState, useEffect } from "react";

function Cycle() {
  const [counter, setCounter] = useState(0);

  const updater = () => {
    setCounter(c => c + 1);
    setCounter(c => c + 1);
    setCounter(c => c + 1);
  };

  return (
    <>
      <p style={{fontSize: "2rem", textAlign: "center"}}>{counter}</p>
      <button onClick={updater}>Increase</button>
    </>
  );
}

export default Cycle;

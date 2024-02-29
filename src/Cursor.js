import React, { useState, useEffect } from "react";

export default function Cursor() {
  const [coords, setCoords] = useState({x: 0, y:0});

  useEffect(() => {
    function getCoords(event) {
      setCoords(c => c = {x: Math.round(event.clientX), y: Math.round(event.clientY)})
    }
    window.addEventListener("pointermove", getCoords)
  }, []);

  useEffect(() => {
    document.title = `${coords.x} ${coords.y}`
  }, [coords])

  return (
    <>
      <h2>X Coords: {coords.x}</h2>
      <h2>Y Coords: {coords.y}</h2>
    </>
  );
}

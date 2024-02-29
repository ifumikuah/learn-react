import React, { useState, useEffect } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date().toLocaleTimeString("en-ID"));

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date().toLocaleTimeString("en-ID"))
    }, 1000);
  });

  return (
    <>
      <h2>{date}</h2>
    </>
  );
}

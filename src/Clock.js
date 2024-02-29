import React, { useState, useEffect } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const setTime = setInterval(() => {
      setDate(new Date())
    }, 1000);
    return () => {
      clearInterval(setTime)
    }
  }, []);

  function padZero(number) {
    return number < 10 ? "0" + number : number
  }

  function formatTime() {
    let hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const meridiam = hour >= 12 ? "PM" : "AM"

    hour = hour % 12 || 12
    return `${padZero(hour)}:${padZero(minute)}:${padZero(second)} ${meridiam}`
  }

  return (
    <>
      <h1 className="clock-time">{formatTime()}</h1>
    </>
  );
}

import React, { useState, useEffect, useRef } from "react";

export default function Stopwatch() {
  const [active, setActive] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const intervalId = useRef(null);
  const delta = useRef(0);

  const start = () => {
    setActive(true)
    delta.current = Date.now() - elapsed
  }

  const pause = () => {
    setActive(false)
  }
  
  const reset = () => {
    setElapsed(0)
    setActive(false)
  }

  useEffect(() => {
    if (active) {
      intervalId.current = setInterval(() => {
        setElapsed(Date.now() - delta.current)
      }, 10);
    }
    return () => {
      clearInterval(intervalId.current)
    }
  }, [active])

  const displayStopwatch = () => {
    const milisecond = Math.floor((elapsed % 1000) / 10).toString().padStart(2, "0")
    const second = Math.floor(elapsed / 1000 % 60).toString().padStart(2, "0")
    const minute = Math.floor(elapsed / (1000 * 60) % 60).toString().padStart(2, "0")

    return `${minute}:${second}:${milisecond}`
  }

  return (
    <div className="Stopwatch">
      <h2>{ displayStopwatch() }</h2>
      <div className="container flex">
        <button className="button start" onClick={start}>Start</button>
        <button className="button pause" onClick={pause}>Pause</button>
        <button className="button reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

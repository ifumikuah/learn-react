import React, { useState, useEffect, useRef } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([])
  const [isActive, setIsActive] = useState(false);
  const intervalId = useRef(null);

  useEffect(() => {
    if (isActive) {
      intervalId.current = setInterval(() => {
        setTime((t) => t + 1);
      }, 100);
    }

    return () => {
      clearInterval(intervalId.current);
    };
  }, [isActive]);

  const start = () => {
    setIsActive(true);
  };

  const pause = () => {
    setIsActive(false);
  };

  const reset = () => {
    setIsActive(false);
    setTime(0);
    setLaps([])
  };

  const formatter = (number) => {
    const second = Math.floor((number / 10) % 60);
    const minute = Math.floor((number / 10 / 60) % 60);
    const hour = Math.floor(number / 10 / 3600);

    return {
      hour: hour.toString().padStart(2, "0"),
      minute: minute.toString().padStart(2, "0"),
      second: second.toString().padStart(2, "0"),
    };
  };

  const lap = () => {
    if (time) {
      const capturedLap = `${formatter(time).hour}:${formatter(time).minute}:${formatter(time).second}.${time % 10}`
      setLaps(l => [...l, capturedLap])
    }
  }

  return (
    <div className="Stopwatch">
      <h2 className="timer">
        {formatter(time).hour}:{formatter(time).minute}:{formatter(time).second}
        <span className="milisecond">.{time % 10}</span>
      </h2>
      <div className="buttons">
        {isActive ?
          <button className="button" onClick={pause}> Pause </button>
          :
          <button className="button" onClick={start}> Start </button>
        }
        <button className="button" onClick={lap}> Lap </button>
        <button className="button" onClick={reset}> Reset </button>
      </div>
      <ol className="laps-list">
        {laps.map((e, i) => <li key={i}> { i+1 }. { e }</li>)}
      </ol>
    </div>
  );
}

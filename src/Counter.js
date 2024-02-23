import React, {useState} from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0)
  const [trend, setTrend] = useState(null)
  const [prevCount, setPrevCount] = useState(count)

  const increment = () => {
    setCount(c => c + 1)
  }
  const decrement = () => {
    setCount(c => c - 1)
  }
  const reset = () => {
    setPrevCount(count)
    setCount(0)
  }

  if (count !== prevCount) {
    setTrend(count > prevCount ? "Increasing" : "Decreasing")
  }

  return (
    <>
      <h2 style={{textAlign: "center", fontSize: "5rem"}}>{count}</h2>
      <div>
        <Button executor={increment} text={"Increment"}/>
        <Button executor={decrement} text={"Decrement"}/>
        <Button executor={reset} text={"Reset"}/>
      </div>
      {trend && <p style={{textAlign: "center", fontSize: "2rem"}}>Trend is {trend}</p>}
    </>    
  )
};

export default Counter;
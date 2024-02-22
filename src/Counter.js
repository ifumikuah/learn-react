import Button from "./Button";
import React, {useState} from "react";

function Counter() {
  const [counterVal, setCounterVal] = useState(0)
  const decrement = () => {
    setCounterVal(counterVal - 1)
  }
  const increment = () => {
    setCounterVal(counterVal + 1)
  }
  const reset = () => {
    setCounterVal(0)
  }

  const styles = {
    textAlign: "center",
    fontSize: "5rem"
  }

  return (
    <>
      <h1 className="counter" style={styles}>{counterVal}</h1>
      <div>
        <Button executor={decrement} text={"Decrease"} />
        <Button executor={increment} text={"Increase"} />
        <Button executor={reset} text={"Reset"} />
      </div>
    </>
  )
}

export default Counter;
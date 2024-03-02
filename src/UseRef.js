import React, { useState, useEffect, useRef } from "react"

export default function UseRef() {
  const [counter, setCounter] = useState(0);
  const occurence = useRef(0)

  const tallyCounter = () => { 
    console.log(occurence);
    occurence.current ++
    setCounter(c => c + 1)
  }

  return (
    <>
      <h2>Counter: {counter}</h2>
      <button onClick={tallyCounter}> Count </button>
      <p> Render: {occurence.current} </p>
    </>
  )
}
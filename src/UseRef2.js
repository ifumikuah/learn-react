import React, { useState, useRef } from "react"

export default function UseRef2() {
  const inputRef = useRef()

  return(
    <>
      <input ref={inputRef}/>
      <button>Click</button>
    </>
  )
}
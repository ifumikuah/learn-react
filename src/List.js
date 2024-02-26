import React, { useState } from "react"

export default function List () {
  const [list, setList] = useState([{year: new Date().getFullYear(), name: "Adolf"}])
  const [objName, setObjName] = useState("")
  const [objYear, setObjYear] = useState(new Date().getFullYear())

  const addObj = () => {
    if (objName && objYear) {
      const obj = {
        year: objYear,
        name: objName
      }
  
      setList(l => [...l, obj])
      setObjName("")
      setObjYear(new Date().getFullYear())
    }
  }
  const handleYearChange = (ev) => {
    setObjYear(ev.target.value)
  }
  const handleNameChange = (ev) => {
    setObjName(ev.target.value)
  }
  const delObj = (id) => {
    setList(
      l => l.filter((_,i) => i !== id)
    )
  }

  return (
    <>
      <ul>
        {list.map((x, id) => <li key={id} onClick={() => delObj(id)}>{x.year}, {x.name}</li>)}
      </ul>
      <input style={{display: "block"}} type="number" placeholder="year" value={objYear} onChange={handleYearChange}/>
      <input style={{display: "block"}} type="text" placeholder="name" value={objName} onChange={handleNameChange}/>
      <button onClick={addObj}>SUBMIT</button>
    </>
  )
}
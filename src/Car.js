import React, {useState} from "react";

export default function Car({obj}) {
  const [objstate, setObjstate] = useState(obj)

  const setObjstateModel = (e) => {
    setObjstate(
      o => ({...o, model: e.target.value})
    )
  }
  const setObjstateYear = (e) => {
    setObjstate(
      o => ({...o, year: e.target.value})
    )
  }

  return (
    <>
      <h2>{objstate.year} {objstate.model}</h2>
      <form>
        <label style={{display: "block"}}>Enter year &nbsp;
          <input type="number" onChange={setObjstateYear} value={objstate.year}/>
        </label>
        <label style={{display: "block"}}>Enter model &nbsp;
          <input type="text" onChange={setObjstateModel} value={objstate.model}/>
        </label>
      </form>
    </>
  )
}

Car.defaultProps = {
  obj: {
    year: 2002,
    model: "Honda"
  }
}
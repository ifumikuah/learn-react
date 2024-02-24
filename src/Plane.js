import React, {useState} from "react"

export default function Plane() {
  const [aircraft, setAircraft] = useState({model: "777-200ER", manufacturer: "Boeing", year: 1998})

  const setAircraftModel = (event) => {
    setAircraft(
      a => ({...a, model: event.target.value})
    )
  }
  const setAircraftManufacturer = (event) => {
    setAircraft(
      a => ({...a, manufacturer: event.target.value})
    )
  }
  const setAircraftYear = (event) => {
    setAircraft(
      a => ({...a, year: event.target.value})
    )
  }

  return (
    <>
      <h2>{aircraft.year}, {aircraft.manufacturer} {aircraft.model}</h2>
      <form>
        <label style={{display: "block"}}>Enter year &nbsp;
          <input type="number" onChange={setAircraftYear} value={aircraft.year}/>
        </label>
        <label style={{display: "block"}}>Enter model &nbsp;
          <input type="text" onChange={setAircraftModel} value={aircraft.model}/>
        </label>
        <label style={{display: "block"}}>Enter manufacturer &nbsp;
          <input type="text" onChange={setAircraftManufacturer} value={aircraft.manufacturer}/>
        </label>
      </form>
    </>
  )
}
import React, {useState} from "react";

function RadioButtons() {
  const [fruit, setFruit] = useState("")

  const fruitTrack = (e) => {
    setFruit(e.target.value)
  }

  return (
    <>
      <div className="flex-col">
        <label>
          Apple
          <input type="radio" value="Apple" checked={fruit === "Apple"} onChange={fruitTrack}/>
        </label>

        <label>
          Banana
          <input type="radio" value="Banana" checked={fruit === "Banana"} onChange={fruitTrack}/>
        </label>

        <label>
          Cherry
          <input type="radio" value="Cherry" checked={fruit === "Cherry"} onChange={fruitTrack}/>
        </label>

        <label>
          Mango
          <input type="radio" value="Mango" checked={fruit === "Mango"} onChange={fruitTrack}/>
        </label>
      </div>

      <div>
        Selected: {fruit}
      </div>
    </>
  )
};

export default RadioButtons;
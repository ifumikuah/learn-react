import React, {useState} from "react"

export default function Fish() {
  const [fish, setFish] = useState(["Tilapia", "Carp"]);

  const addFish = () => {
    const fishToAdd = document.getElementById("addFish").value; // Store the fish before it get erased by line below
    document.getElementById("addFish").value = "";

    setFish(f => [...f, fishToAdd])
  };

  const delFish = (key) => {
    setFish(
      f => f.filter((_,i) => i !== key)
    )
  }

  return (
    <>
      <ul>
        {fish.map((x,i) => <li key={i} onClick={() => delFish(i)}>{x}</li>)}
      </ul>
      <input type="text" id="addFish"/>
      <button onClick={addFish}>submit</button>
    </>
  )
}

Fish.defaultProps = {
  arr: ["Anglerfish"]
}
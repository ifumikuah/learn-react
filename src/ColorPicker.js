import React, {useState} from "react";

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");
  const changeColor = (e) => {
    setColor(e.target.value)
  }

  const swatchStyle = {
    backgroundColor: color,
    borderRadius: "100px",
    width: "200px",
    height: "200px"
  }

  return (
    <>
      <labell for="color">Select Color: &nbsp;</labell>
      <input type="color" name="color" value={color} onChange={changeColor}/>
      <div>
        <h2>Selected Color: {color}</h2>
        <div style={swatchStyle}></div>
      </div>
    </>
  )
}

export default ColorPicker;
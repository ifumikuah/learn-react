import React, {useState} from "react"

export default function List({array}) {
  const [list, setList] = useState(array)

  const addToList = () => {
    if (document.getElementById("listInput").value) {
      const queuedItem = document.getElementById("listInput").value;
  
      document.getElementById("listInput").value = ""
      setList(l => [...l, queuedItem])
    }
  }
  const delFromList = (elementKey) => {
    setList(
      l => l.filter((_, i) => i !== elementKey)
    )
  }

  return (
    <>
      <ul>
        {list.map((x,i) => <li onClick={() => delFromList(i)} key={i}>{x}</li>)}
      </ul>
      <input id="listInput" placeholder="Insert an Item"/>
      <button onClick={addToList}>ADD</button>
    </>
  )
}

List.defaultProps = {
  array: ["Click an item", "To delete from lists"]
}
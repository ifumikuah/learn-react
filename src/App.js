import React, {useState} from 'react';
// import Card from './Card';

function App() {
  const [counter, setCounter] = useState(0)

  function updateCounter() {
    setCounter(counter + 1)
  }

  return (
    <>
      <h2>You clicked the button {counter} times</h2>
      <button onClick={()=> updateCounter()} >Click to Counter</button>
    </>
  );
}

export default App;
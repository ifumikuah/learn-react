import './App.css';
import Header from './Header';
import Button from './Button';

function App() {
  function clicked() {
    return alert("Button Smashed")
  }

  const name = "Fadhil Suheri"

  return (
    <>
      <Header name={name}/>
      <Button onclick={clicked}/>
    </>
  );
}

export default App;
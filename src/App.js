import './App.css';
import First from './components/first';
import Header from './Header';

function App() {
  return (
    <>
      <Header/>
      <First hewan="ikan"/>
      <First hewan="kuda"/>
    </>
  );
}

export default App;
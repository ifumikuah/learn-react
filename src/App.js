import Car from "./Car";
import Plane from "./Plane";

function App() {
  const car = {
    model: "General Dynamics F18EX",
    year: 2013
  }

  return (
    <>
      <Plane/>
      {/* <Car obj={car}/> */}
    </>
  );
}

export default App;
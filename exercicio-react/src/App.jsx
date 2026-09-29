import "./App.css";
import Car from "./components/Car";

function App() {
  const cars = [
    { id: 1, name: "Ferrari GT", brand: "Ferrari" },
    { id: 2, name: "BMW X6", brand: "BMW" },
    { id: 3, name: "Audi A4", brand: "Audi" },
  ];
  return (
    <>
      <h1 className="myTitle">Hello, Vite + React!</h1>
      {cars.map((car) => (
        <Car key={car.id} name={car.name} brand={car.brand} />
      ))}
    </>
  );
}

export default App;

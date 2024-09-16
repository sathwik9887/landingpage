import { useState } from "react";

function Car() {
  
  let [car, setCar] = useState({
    year: 2021,
    make: "Ford",
    model: "Mustang"
  });

 function handleYearChange(e)
 {
    setCar(c => ({...c, year: event.target.value}));

 }

 function handleMakeChange(e)
 {
    setCar(c => ({...c, make: event.target.value}));
    
 }

 function handleModelChange(e)
 {
    setCar(c => ({...c, model: event.target.value}));
    
 }

  return (
    <div>
      <p>
        Your favourite car is: {car.year}, {car.make}, {car.model}
      </p>

      {/* Set the value and handle change events for all inputs */}
      <input
        type="number"
        name="year"
        value={car.year}
        onChange={handleYearChange}
      /><br />
      
      <input
        type="text"
        name="make"
        value={car.make}
        onChange={handleMakeChange}
      /><br />
      
      <input
        type="text"
        name="model"
        value={car.model}
        onChange={handleModelChange}
      /><br />
    </div>
  );
}

export default Car;

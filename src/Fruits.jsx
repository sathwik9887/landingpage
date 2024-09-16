import { useState } from "react";

function Fruits() {
  const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);

  // Function to add new food to the list
  function handleAddFood() {
    const newFood = document.getElementById("foodItem").value.trim();
    if (newFood) {
      setFoods((prevFoods) => [...prevFoods, newFood]);
    }
    document.getElementById("foodItem").value = ""; // Clear input after adding
  }

  // Function to remove a food by index
  function handleRemoveFood(index) {
    setFoods((prevFoods) => prevFoods.filter((_, i) => i !== index));
  }

  return (
    <>
      <h2>List of foods</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>
            {food}{" "}
            <button onClick={() => handleRemoveFood(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input type="text" id="foodItem" placeholder="Enter the food" />
      <button onClick={handleAddFood}>Add</button>
    </>
  );
}

export default Fruits;

import { useState, useEffect } from "react";

function Effect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  // Update the document title whenever count or color changes
  useEffect(() => {
    document.title = `Count: ${count} - ${color}`;
  }, [count, color]);

  // Increment the counter
  function counter() {
    setCount((prevCount) => prevCount + 1);
  }

  // Decrement the counter
  function counters() {
    setCount((prevCount) => prevCount - 1);
  }

  // Toggle the color between green and red
  function changeColor() {
    setColor((prevColor) => (prevColor === "green" ? "red" : "green"));
  }

  return (
    <>
      <h1 style={{ color: color }}>Count: {count}</h1>
      <button onClick={counter}>Add</button>
      <button onClick={counters}>Subtract</button>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default Effect;

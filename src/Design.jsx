function Design() {
    const fruits = [
      { id: 1, name: "apple", calories: 99 },
      { id: 2, name: "orange", calories: 91 },
      { id: 3, name: "banana", calories: 95 },
      { id: 4, name: "grape", calories: 98 },
    ];

    // fruits.sort((a, b) => a.calories - b.calories);

    const filteredFruits = fruits.filter(fruit => fruit.calories > 95);

  
    const listItems = filteredFruits.map(fruit => (

        <li key={fruit.name}>
          {fruit.name} - {fruit.calories} calories
        </li>

    ));
  
    return <ul>{listItems}</ul>;
  }
  
  export default Design;
  
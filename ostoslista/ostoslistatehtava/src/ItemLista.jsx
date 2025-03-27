import React, { useState } from "react";
import Formi from "./formi";

function ItemList() {
  const [items, setItems] = useState(["Omena", "Banaani", "Kiivi"]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeItem = (itemToRemove) => {
    setItems(items.filter((item) => item !== itemToRemove));
  };

  return (
    <div>
      <Formi onAddItem={addItem} /> {}
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => removeItem(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;

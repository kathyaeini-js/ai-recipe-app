import { useState } from "react";

function IngredientInput({ onSearch }) {
  const [ingredients, setIngredients] = useState("");

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search recipes (egg, tomato, cheese...)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button onClick={() => onSearch(ingredients)}>
        Search
      </button>
    </div>
  );
}

export default IngredientInput;

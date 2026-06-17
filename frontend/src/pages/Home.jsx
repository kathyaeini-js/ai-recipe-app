import { useState } from "react";
import IngredientInput from "../components/IngredientInput";
import RecipeCard from "../components/RecipeCard";
import { getRecipes } from "../services/api";

function Home() {
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async (ingredients) => {
    try {
      const res = await getRecipes(ingredients);
      setRecipes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="title">🍽️ Recipe Finder</div>

      <IngredientInput onSearch={searchRecipes} />

      {recipes.length === 0 && (
        <p>Search ingredients to find recipes</p>
      )}

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Home;

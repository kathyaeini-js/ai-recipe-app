const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/recipes", async (req, res) => {
  const ingredients = req.query.ingredients;

  try {
    const response = await axios.get(
      "https://api.spoonacular.com/recipes/findByIngredients",
      {
        params: {
          ingredients: ingredients,
          number: 5,
          apiKey: "d03791384cbe4cc18007944a345fd64f"
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error fetching recipes" });
  }
});

module.exports = router;

const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: String,
  image: String,
});

module.exports = mongoose.model("Recipe", RecipeSchema);

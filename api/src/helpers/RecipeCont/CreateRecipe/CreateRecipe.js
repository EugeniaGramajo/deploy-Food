const { Recipe } = require("../../../db");

const createNewRecipe = async (obj) => {
  console.log(obj);
    const newRecipe = await Recipe.create(obj);
    return newRecipe;
  };

  module.exports = createNewRecipe;
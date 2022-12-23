const axios = require("axios");
require("dotenv").config();
const { API_KEY3 } = process.env;


const getRecipeByApiId = async (id) => {
    try {
      const recipe = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY3}`
      );
      const foundId = recipe.data;
      return {
        id: foundId.id,
        title: foundId.title,
        summary: foundId.summary.replace(/<[^>]*>?/g, ''),
        healthScore: foundId.healthScore,
        steps: foundId.analyzedInstructions[0]?.steps.map((step) => {
          return step.step;
        }),
        dishTypes: foundId.dishTypes,
        diet: foundId.diets.map(diet=>({name:diet})),
        readyInMinutes: foundId.readyInMinutes,
        ingredients: foundId.analyzedInstructions[0]?.steps
        .map((each) => {
          return each.ingredients;
        })
        .map((ingredient) =>
          ingredient.map((each) => {
            return each.name;
          })
        )
        .join(",")
        .split(","),
        servings: foundId.servings,
        image: foundId.image,
      };
    } catch (e) {
      return undefined;
    }
  };
  module.exports=getRecipeByApiId;
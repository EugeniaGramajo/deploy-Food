const axios = require("axios");
const getAllRecipes = require("../GetRecipes/GetAllRecipes");

const getRecipeByApiId = async (id) => {
    try {
      const recipe = await getAllRecipes()

      let foundId = recipe.data.results.filter(e =>{ 
        console.log(e)
        e.id=id})
      console.log(foundId)
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
      return e;
    }
  };
  module.exports=getRecipeByApiId;
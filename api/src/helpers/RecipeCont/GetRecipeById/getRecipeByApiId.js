const axios = require("axios");
const getAllRecipes = require("../GetRecipes/GetAllRecipes");

const getRecipeByApiId = async (id) => {
  console.log("id de search api", id)
  try {
    const recipes = await axios.get(
      `https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`
    );
    console.log("bgdfdfggdfg",recipes)
    console.log("",recipes.data.results.map(e.id))
    const foundId = recipes.data.results.find((recipe) => recipe.id === id);
    console.log(foundId);
    return {
      id: foundId.id,
      title: foundId.title,
      summary: foundId.summary.replace(/<[^>]*>?/g, ""),
      healthScore: foundId.healthScore,
      steps: foundId.analyzedInstructions[0]?.steps.map((step) => {
        return step.step;
      }),
      dishTypes: foundId.dishTypes,
      diet: foundId.diets.map((diet) => ({ name: diet })),
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
module.exports = getRecipeByApiId;

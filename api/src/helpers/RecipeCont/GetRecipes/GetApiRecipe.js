const axios = require("axios");


require("dotenv").config();

const { API_KEY3 } = process.env;
const apiURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY3}&addRecipeInformation=true&number=5`;

const getApiRecipes = () => {
  const apiRecipes = axios.get(apiURL).then((res) =>
    res.data.results.map((recipe) => {
      return {
        id: recipe.id,
        title: recipe.title,
        summary: recipe.summary,
        healthScore: recipe.healthScore,
        steps: recipe.analyzedInstructions[0]?.steps.map((step) => {
          return step.step;
        }),
        image: recipe.image,
        dishTypes: recipe.dishTypes,
        readyInMinutes: recipe.readyInMinutes,
        servings: recipe.servings,
        ingredients: recipe.analyzedInstructions[0]?.steps
          .map((each) => { return each.ingredients; })
          .map((ingredient) =>
            ingredient.map((each) => {return each.name; }))
          .join(",").split(","),
        diets: recipe.diets.map((diet) =>(diet)),
      };
    })
  );
  return apiRecipes;
};

module.exports=getApiRecipes;
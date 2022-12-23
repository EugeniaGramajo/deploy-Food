const getApiRecipes = require("./GetApiRecipe");
const getBdRecipes = require("./GetBdRecipe");


const getAllRecipes = async () => {
    const allApiRecipes = await getApiRecipes();
    const allBdRecipes = await getBdRecipes();
    const allRecipes = allApiRecipes.concat(allBdRecipes)
  
    return allRecipes;
  };

  module.exports=getAllRecipes;
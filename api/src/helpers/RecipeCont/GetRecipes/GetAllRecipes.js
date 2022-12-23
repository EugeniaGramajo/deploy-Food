const getApiRecipes = require("./GetApiRecipe");
const getBdRecipes = require("./getBdRecipe");


const getAllRecipes = async () => {
    const allApiRecipes = await getApiRecipes();
    const allBdRecipes = await getBdRecipes();
    const allRecipes = allApiRecipes.concat(allBdRecipes)
  
    return allRecipes;
  };

  module.exports=getAllRecipes;
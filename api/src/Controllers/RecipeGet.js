const getAllRecipes = require("../helpers/RecipeCont/GetRecipes/GetAllRecipes")

const getAllRecipesRoute = async (req, res) => {
    try {
      const {title} = req.query
      console.log("llegue a llamar", title)
      const allRecipes = await getAllRecipes()
      if(title){
        
        let allNameRecipe = allRecipes.filter(recipe => recipe.title?.toLowerCase().includes(title.toString().toLowerCase()))
        if(allNameRecipe.length===0){
         return res.status(200).json("notFound")
        }  
        return res.status(200).json(allNameRecipe)
      }
  
      res.status(200).send(allRecipes);
    } catch (error) {
      res.status(404).json(error.message);
    }
  }
  

  module.exports = getAllRecipesRoute;
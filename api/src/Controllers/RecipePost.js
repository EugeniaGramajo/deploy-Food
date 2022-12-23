const createNewRecipe = require("../helpers/RecipeCont/CreateRecipe/CreateRecipe")

const createNewRecipeRoute = async (req, res) => {
    try {
      
      const data = {
        title,
        summary,
        healthScore,
        steps,
        dishTypes,
        readyInMinutes,
        ingredients,
        servings,
      } = req.body;
      let Diet_type = req.body.Diet_type
      Diet_type = Diet_type?.split(",")
      const image = req.file?.path
      let newRecipe = await createNewRecipe({
        title,
        summary,
        healthScore,
        steps,
        dishTypes,
        readyInMinutes,
        ingredients,
        servings,
        image,
      });
      await newRecipe.addDiet_type(Diet_type) 
       console.log(req.file)
      res.status(200).json(data);
    } catch (error) {
      console.log(error)
      res.status(400).json(error.message);

    }
  }

  module.exports = createNewRecipeRoute;
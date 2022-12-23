const {Recipe} = require("../db")

const deleteBdRecipe = async (req,res)=>{
   
    try {
        const {id}=req.params
        const recipeToDelete = await Recipe.findByPk(id)
        if(recipeToDelete){recipeToDelete.destroy()}
        res.status(200).json({Success: "Recipe has been deleted"})

    } catch (error) {
        res.status(200).json({error:error.message})
    }

 
}

module.exports= deleteBdRecipe;
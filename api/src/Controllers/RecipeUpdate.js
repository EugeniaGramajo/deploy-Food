const getRecipeByBdId = require("../helpers/RecipeCont/GetRecipeById/getRecipeByBdId")
const {Recipe} = require("../db")

const recipeUpdate = async (req,res)=>{
    try {
        const {id}=req.params
        const {steps,ingredients,readyInMinutes} = req.body
        await Recipe.update({steps: steps,
        ingredients:ingredients,readyInMinutes:readyInMinutes},{
            where:{
                ID:id
            }
        })
        
        res.status(200).json({Succes:"Recipe has been modified"})

    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports = recipeUpdate;
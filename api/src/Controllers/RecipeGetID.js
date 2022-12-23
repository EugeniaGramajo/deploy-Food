const getRecipeById = require("../helpers/RecipeCont/GetRecipeById/getRecipeById")

const getRecipesByIdRoute = async(req,res)=>{
    try {
        const {id} =req.params;
        const foundId = await getRecipeById(id)
        res.status(200).json(foundId)
    
    } catch (error) {
        res.status(404).json(error.message)
    }
    }

    module.exports = getRecipesByIdRoute;
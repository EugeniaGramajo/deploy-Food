const allFiltered = require("../helpers/RecipeCont/FilteredRecipes/AllFiltered");

async function  getAllRecipesByFilter(req,res){
    try {
        const {filter} = req.body;
        const filtered = await allFiltered(filter)
        console.log(filtered)
        return res.status(200).send(filtered)
    } catch (error) {
        res.status(404).json(error.message);
    }
     
}


module.exports = getAllRecipesByFilter;
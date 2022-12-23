const { Router} = require("express");
const router = Router()

router.get("/",(req,res)=>{
    const welcome = `Welcome to Henry's food Api made by Eugenia Gramajo
    Endpoints:
    GET:
    /recipes: get all recipes
    /recipes?title= : Allow you to search by the title of the recipe
    /recipes/:id = Allow you to search recipes by id
    POST: 
    /recipes: Creates a new recipe
    DELETE:
    /recipes/:id: Delete a recipe using the id
    PUT:
    /:id: Allow you to update the steps, ingredients and the preparation time of a recipe`  
    
    res.status(200).json(welcome)
})


module.exports = router;
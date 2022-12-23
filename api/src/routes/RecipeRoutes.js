const { Router } = require("express");
const axios = require("axios");


const getAllRecipesRoute = require("../Controllers/RecipeGet");
const getRecipesByIdRoute = require("../Controllers/RecipeGetID");
const createNewRecipeRoute = require("../Controllers/RecipePost");
const fileUpload = require("../validations/valPostRecipe");
const deleteBdRecipe = require("../Controllers/RecipeDelete");
const recipeUpdate = require("../Controllers/RecipeUpdate");
const getAllRecipesByFilter = require("../Controllers/RecipesByFilter");
const router = Router();



router.get("/",  getAllRecipesRoute);


router.post("/", fileUpload , createNewRecipeRoute);


router.get("/:id", getRecipesByIdRoute)


router.get("/", getAllRecipesByFilter)


router.delete("/:id", deleteBdRecipe)


router.put("/:id", recipeUpdate)



module.exports = router;

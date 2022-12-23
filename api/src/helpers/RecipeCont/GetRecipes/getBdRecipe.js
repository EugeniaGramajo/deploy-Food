
const { Recipe, Diet_type } = require("../../../db");

const getBdRecipes = async () => {
  const recipes =  await Recipe.findAll({
      include: {
        model: Diet_type,
        attributes: [ "name"],
        through:{
          attributes: []
        }
      },
    });

    const filtered = recipes.map(e=>{
     return{
      
      id: e.id,
      title: e.title,
      healthScore: e.healthScore,
      steps: e.steps,
      dishTypes: e.dishTypes,
      summary: e.summary,
      readyInMinutes: e.readyInMinutes,
      ingredients: e.ingredients,
      servings: e.servings,
      image: e.image.includes("post.healthline")? e.image : ("http://localhost:3001/" + e.image),
      diets: e.Diet_types.map((e) => e.name),
      
      
    }
    })
    
    return filtered;
  }; 

  module.exports= getBdRecipes;
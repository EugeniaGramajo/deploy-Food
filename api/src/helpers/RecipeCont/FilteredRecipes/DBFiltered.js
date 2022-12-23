const { Recipe, Diet_type } = require("../../../db");

const DBFiltered = async (filter)=>{
    const recipes =  await Recipe.findAll({
        include: {
          model: Diet_type,
          attributes: [ "name"],
          through:{
            attributes: []
          }
        },
      });

      const prefiltered = recipes.filter(r=>r.diets.include(filter))
      const filtered = prefiltered.map(e=>{
        return{
          id: e.id,
      title: e.title,
      healthScore: e.healthScore, 
      diets: e.Diet_types.map((e) => e.name),
      image: e.image.includes("post.healthline")? e.image : ("http://localhost:3001/" + e.image),
     
        }
        
      })
}

module.exports = DBFiltered;
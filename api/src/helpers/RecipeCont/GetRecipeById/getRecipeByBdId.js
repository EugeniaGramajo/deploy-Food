const {Recipe, Diet_type} = require("../../../db")

const getRecipeByBdId = async (id) => {
    try {
      const foundId = await Recipe.findByPk(id, {
        include: {
          model: Diet_type,
          attributes: ["name"],
          through:{
            attributes:[]
          }
        },
      });

      foundId.image = foundId.image.includes("post.healthline")? foundId.image : ("https://deploy-food-production.up.railway.app/" + foundId.image)
      foundId.steps = foundId.steps.split(",")
      foundId.dishTypes=foundId.dishTypes.split(",")
      foundId.ingredients=foundId.ingredients.split(",")

      return foundId;
    } catch (e) {
      return undefined;
    }
  };


  module.exports = getRecipeByBdId;
const getRecipeByApiId = require("./getRecipeByApiId");
const getRecipeByBdId = require("./getRecipeByBdId")

const getRecipeById = async (id) => {
  console.log("este es la id general", id)
    const apiIdsearch = getRecipeByApiId(id);
    const bdIdsearch = getRecipeByBdId(id);
    const [apiId, bdId] = await Promise.all([apiIdsearch, bdIdsearch]);

    return  bdId || apiId ;
  };

  module.exports = getRecipeById;
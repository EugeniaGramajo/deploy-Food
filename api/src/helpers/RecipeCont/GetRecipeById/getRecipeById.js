const getRecipeByApiId = require("./getRecipeByApiId");
const getRecipeByBdId = require("./getRecipeByBdId")

const getRecipeById = async (id) => {
    const apiIdsearch = getRecipeByApiId(id);
    const bdIdsearch = getRecipeByBdId(id);
    const [apiId, bdId] = await Promise.all([apiIdsearch, bdIdsearch]);

    return  bdId || apiId ;
  };

  module.exports = getRecipeById;
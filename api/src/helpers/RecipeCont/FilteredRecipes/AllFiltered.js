
const APIFiltered = require("./APIFiltered");
const DBFiltered = require("./DBFiltered");

const  allFiltered = async (filter)=>{
   try{
    console.log("entre a allfiltered")
    const apirecipes = await APIFiltered(filter);
   const dbrecipes = await DBFiltered(filter);
   const allrecipes = apirecipes.concat(dbrecipes)
    
  let filtered = allrecipes.filter(r=>r.diets?.some(d=>d===filter))

        return filtered
}catch(error){
        res.status(404).json(error.message)
    }
}

module.exports = allFiltered;
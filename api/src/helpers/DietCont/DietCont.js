const axios = require("axios");

const { Diet_type } = require("../../db");
require("dotenv").config();

const { API_KEY3 } = process.env;



const getDietPreLoad= async()=>{
    try {
        const apiInfo = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY3}&addRecipeInformation=true&number=10`)
        const apiDiets = apiInfo.data?.results.map(element => element.diets)
        const repeatedDiets = apiDiets.flat()
        const finalListOfDiets = [...new Set(repeatedDiets)]
        
         await finalListOfDiets.map(name => Diet_type.findOrCreate({
            where:{
                name: name
            }
        }));
        
         
    } catch(err) {
        console.error(err)
    }
}



module.exports={
    getDietPreLoad,
}
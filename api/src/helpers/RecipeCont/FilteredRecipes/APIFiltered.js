const axios = require("axios")

require("dotenv").config();

const {API_KEY3} = process.env;
const apiURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY3}&addRecipeInformation=true&number=5`;


const APIFiltered = async (filter) =>{
    const apirecipes = axios.get(apiURL).then((res)=>
    res.data.result.filter(r=>{
        r.diets?.some(d=>d===filter)}
    ))
    const filterd = apirecipes.map((r)=>{
        return {  
            id:r.id,
            title: r.title,
            image: r.image,
            diets: r.diets.map((diet) =>(diet)),
            healthScore: r.healthScore,
    }
    })
    return filterd
}

module.exports = APIFiltered;
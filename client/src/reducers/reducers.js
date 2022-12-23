import { CLEAN_STATE, GET_ALL_RECIPES, GET_ALL_RECIPES_BY_ID, GET_DIETS, GET_RECIPES_BY_DIET, GET_RECIPES_SORT, GET_TITLE_RECIPES } from "../actions/actions"

const initialState = {
    recipes: [],
    recipeDetail:{},
    newRecipe:{},
    diet:[]
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_RECIPES:
            return {
                ...state,recipes:action.payload
            }
        case GET_ALL_RECIPES_BY_ID:
            return {
                ...state,recipeDetail:action.payload
            }
        case GET_DIETS:
            return{
                ...state, diet: action.payload
            }
        case GET_RECIPES_BY_DIET:
            const auxiliar = state.recipes;
            const recipeFilterd = auxiliar.filter(e=>{
                return e.diets?.include(action.payload) 
            })
            return{
                ...state, recipes: action.payload==="allDiets" ?  auxiliar : recipeFilterd
            }
        case CLEAN_STATE:
            return {
                ...state, recipeDetail: {}
            }
        case GET_TITLE_RECIPES:
            return {
                ...state, recipes: action.payload
            }
        case GET_RECIPES_SORT:
            console.log(action)
            
            
            if(action.payload==="Asc"){
                let sortArray = [state.recipes.sort(function (a, b) {
                    if (a.title.toLowerCase() > b.title.toLowerCase()) {
                        return 1;
                    }
                    if (b.title.toLowerCase() > a.title.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })]
                console.log(sortArray)
                return{
                    ...state, recipes: sortArray
                }
            }
            if(action.payload==="Des"){
                let sortArray=[ state.recipes.sort(function (a, b) {
                    if (a.title.toLowerCase() > b.title.toLowerCase()) {
                        return -1;
                    }
                    if (b.title.toLowerCase() > a.title.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                })]
                console.log(sortArray)
                return {
                    ...state, recipes:sortArray
                }
            }

            return{
                ...state
            }
            
        default:
            return{
                ...state
            }
    }   
}

export default rootReducer;
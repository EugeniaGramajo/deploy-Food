import axios from "axios";
import NotFound from "../components/NotFound/NotFound";
export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_ALL_RECIPES_BY_ID = "GET_ALL_RECIPES_BY_ID";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const UPDATE_RECIPE = "UPDATE_RECIPE";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const GET_DIETS = "GET_DIETS";
export const GET_RECIPES_SORT = "GET_RECIPES_SORT";
export const GET_RECIPES_BY_DIET = "GET";
export const CLEAN_STATE = "CLEAN_STATE";
export const GET_TITLE_RECIPES = "GET_TITLE_RECIPES";
let URL = "deploy-food-production.up.railway.app/";

export const getAllRecipes = () => (dispatch) => {
  return fetch("https://deploy-food-production.up.railway.app/recipes")
    .then((res) => res.json())
    .then((data) => {
      return dispatch({ type: GET_ALL_RECIPES, payload: data });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAllRecipesById = (id) => {
  return async function (dispatch) {
    const res = await axios.get(
      `deploy-food-production.up.railway.app/recipes/${id}`
    );
    return dispatch({ type: GET_ALL_RECIPES_BY_ID, payload: res.data });
  };
};

export const getDietTypes = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        "deploy-food-production.up.railway.app/diets"
      );
      console.log(res);
      console.log(res.data);
      dispatch({ type: GET_DIETS, payload: res.data });
    } catch (err) {
      return console.log(err);
    }
    /* return fetch("http://localhost:3001/diets")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_DIETS, payload: data });
      })
      .catch((err) => console.log(err)); */
  };
};

export const getRecipesByDiet = (condition) => {
  return {
    type: GET_RECIPES_BY_DIET,
    payload: condition,
  };
};

export const cleanState = () => {
  return {
    type: CLEAN_STATE,
  };
};

export const getRecipeByName = (payload) => {
  return async function (dispatch) {
    try {
      var json = await axios.get("recipes?title=" + payload);
      return dispatch({
        type: GET_TITLE_RECIPES,
        payload: json.data,
      });
    } catch (error) {
      return <NotFound></NotFound>;
    }
  };
};

export const getRecipesSort = (sort) => {
  return {
    type: GET_RECIPES_SORT,
    payload: sort,
  };
};

export const getRecipesByScore = () => {};

export const deleteRecipe = () => {};

export const updateRecipe = () => {};

export const createRecipe = (payload) => {
  return async function (dispatch) {
    var json = await axios.post(
      "deploy-food-production.up.railway.app/recipes",
      payload
    );
    return json;
  };
};

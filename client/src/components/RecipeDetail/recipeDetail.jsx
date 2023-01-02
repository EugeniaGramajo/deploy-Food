import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { cleanState, getAllRecipesById } from "../../actions/actions";
import styles from "./recipeDetail.module.css";
import Loading from "../Loading/Loading"

export default function RecipeDetail(props) {
  const dispatch = useDispatch();
  const recipeId = useParams();
  console.log(recipeId)
  let recipeDetails = useSelector((state) => state.recipeDetail);
  console.log(recipeDetails)
  let recipeDetail = ""
   recipeDetail = recipeDetails? recipeDetails : recipeDetail.title = null
  useEffect(() => {
    dispatch(getAllRecipesById(recipeId.id));
  }, [dispatch]);
  const clickHandler=(e)=>{
  return cleanState()}

  const filteredIngredients = recipeDetail.ingredients
    ? [...new Set(recipeDetail.ingredients)]
    : recipeDetail.ingredients;

  return recipeDetails.id==recipeId.id? (
    <div className={styles.padding}>
      <div className={styles.general}>
        <div className={styles.button}>
          <Link to={"/home"}>
            <button className={styles.buttonbtn} onClick={()=>clickHandler()}>Back</button>
          </Link>
        </div>

        <h2 className={styles.h2T}>{recipeDetail.title}</h2>
        <div className={styles.grid2}>
          <div className={styles.sep}>
            <img
              className={styles.img}
              src={recipeDetail.image}
              alt={recipeDetail.title}
            />
            <h2 className={styles.healthScore}>
              Health Score: {recipeDetail.healthScore}
            </h2>
          </div>
          <div className={styles.summary}>{recipeDetail.summary}</div>
        </div>
        <div className={styles.divSteps}>
          <div>
            <div className={styles.ingredients}><h2 className={styles.h2}>Ingredients</h2>
              
                
                {filteredIngredients
                  ? <ul>{filteredIngredients?.map((ing) => <li>{ing}</li>)}</ul>
                  : <p>Ingredients not found for this recipe, but we're working to bring you the best recipes!!</p>}
              
            </div>

            
            <div className={styles.diets}>
              <div className={styles.divdt}><h2 className={styles.h2}>Diet type:</h2></div>
              
              {recipeDetail.diet? recipeDetail.diet.map((d) => (
                <li className={styles.li}>
                  {d.name} 
                </li>
              )) : recipeDetail.Diet_types?.map((d) => (
                <li className={styles.li}>
                  {d.name} 
                </li>
              )) }
            </div>
            <div className={styles.dish}><h2 className={styles.h2}>
              Dish type:{" "}
              {recipeDetail.dishTypes?.map((type) => (
                <li>{type}</li>
              ))}
            </h2></div>
            
          </div>
          <ol className={styles.ol}>
            <h2 className={styles.h2}>How to prepare it!</h2>
            {recipeDetail.steps
              ? recipeDetail.steps.map((step) => <li>{step}</li>)
              : "Steps not found for this recipe, but we're working to bring you the best recipes!!"}
          </ol>
        </div>
      </div>
    </div>
  ):(
    <Loading></Loading>
  );
}

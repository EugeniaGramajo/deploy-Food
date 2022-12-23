import React from "react";
import * as ReactRedux from "react-redux"
import { getAllRecipes, getDietTypes } from "../../actions/actions";
import RecipeCard from "../RecipeCard/RecipeCard";
import styles from "./RecipeCards.module.css"

class RecipeCards extends React.Component{
componentDidMount(){
    this.props.getAllRecipes()

 }

render(){
    return(
    <div className={styles.check}>
    {
        this.props.recipes.map((recipe)=><RecipeCard
         title={recipe.title}
         image={recipe.image}
         healtScore={recipe.healthScore}
         servings={recipe.servings}
         Diet_type={recipe.diets? recipe.diets : recipe.Diet_types.map(d=>d.name)}
         id={recipe.id}
         key={recipe.id}
        />)

    }
    </div>
    )
}

}

const mapStateToProps=(state)=>{
    return {
        recipes: state.recipes,

    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getAllRecipes:()=>{dispatch(getAllRecipes)},
  
    }
}

export default ReactRedux.connect(mapStateToProps,mapDispatchToProps)(RecipeCards)
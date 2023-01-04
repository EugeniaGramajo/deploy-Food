import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getAllRecipes, getRecipeByName } from "../../actions/actions";
import styles from "./stylesComponents/searchBar.module.css"

export default function SearchBar (){

  const history=useHistory()
  const [search, setSearch]=useState("")
  const dispatch = useDispatch()
  const state = useSelector(state=>state.recipes)

  const changeHandler = (e)=>{
    setSearch(e.target.value)
    
  }
  const clickHandler = (e)=>{
    e.preventDefault()
    history("/home")
    dispatch(getRecipeByName(search))
    
  }
  const clickHandler2 = (e)=>{
    e.preventDefault()
    dispatch(getAllRecipes())
  }



  return(
    <>
    <div>
      <input placeholder="  Search a recipe" className={styles.input} value={search} onChange={e=>{changeHandler(e)}}></input>
      <button className={styles.button} onClick={(e)=>clickHandler(e)}> Search </button>
      <button className={styles.button} onClick={(e)=>{clickHandler2(e)}}>Reset</button>
    </div>
    </>
  )
}
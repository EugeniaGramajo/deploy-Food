import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, getRecipeByName } from "../../actions/actions";
import styles from "./stylesComponents/searchBar.module.css"

export default function SearchBar (){

  const [search, setSearch]=useState("")
  const dispatch = useDispatch()
  const state = useSelector(state=>state.recipes)

  const changeHandler = (e)=>{
    setSearch(e.target.value)
    console.log(search)
  }
  const clickHandler = (e)=>{
    e.preventDefault()
    dispatch(getRecipeByName(search))
    console.log(state)
  }
  const clickHandler2 = (e)=>{
    e.preventDefault()
    dispatch(getAllRecipes())
  }



  return(
    <>
    <div>
      <input placeholder="Search a recipe" className={styles.input} value={search} onChange={e=>{changeHandler(e)}}></input>
      <button className={styles.button} onClick={(e)=>clickHandler(e)}>Search</button>
      <button className={styles.button} onClick={(e)=>{clickHandler2(e)}}>Reset</button>
    </div>
    </>
  )
}
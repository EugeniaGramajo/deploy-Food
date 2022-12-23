import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesSort } from "../../actions/actions";

export default function Filters (){

    const [filter,setFilter]=useState("")
    const filtered = useSelector(state=>state.recipes)
    const [sort,setSort]=useState("default")
    const dispatch = useDispatch()

    const sortHandler=(e)=>{
        if(e.target.value==="default"){
            setSort("Asc")
            dispatch(getRecipesSort(sort))
        }
        if(e.target.value==="Asc"){
            setSort("Des")
            dispatch(getRecipesSort(sort))
        } else {
            setSort("default")
        }

    }
    console.log("estoy haciendo algo", sort)

    useEffect(()=>{},[])

    return(
        <>
        <div>
            <button value={sort} onClick={(e)=>sortHandler(e)} >Sort</button>

        </div>
        </>
    )
}
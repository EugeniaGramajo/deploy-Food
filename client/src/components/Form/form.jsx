import React, {useState} from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createRecipe, getDietTypes } from "../../actions/actions";

import styles from "./form.module.css"
import formdataCreator from "./formdata";



export default function Form(){
    const [form,setForm] = useState({
        title:"",
        summary:"",
        healthScore:0,
        steps:[],
        dishTypes:[],
        readyInMinutes:0,
        ingredients:[],
        servings:0,
        image:"",
        Diet_type:[]

    })
    const [steps, setSteps] = useState("")
    const [dishTypes, setDishType]=useState("")
    const [ingredients, setIngredients]= useState("")  
    const history = useHistory()
const dispatch=useDispatch()
useEffect(()=>{
    dispatch(getDietTypes())
})
const diets = useSelector(state=> state.diet)
    

   const changeHandler=(e)=>{
        setForm({...form, [e.target.name]:e.target.value})         
    }
    const stepHandler = (e)=>{
        let aux = e.target.name
        let auxV = e.target.value
        if(e.key==="Enter"){
            e.preventDefault()
            
            setForm({...form, [e.target.name]: [...form[aux] , auxV ]})
            aux==="steps"? setSteps("") : aux==="ingredients"? setIngredients("") : setDishType("")

        }
        console.log(form)
    }
    const deleteHandler = (e)=>{
        let help = e.target.name
        e.preventDefault()
        let aux = form[help].filter(s=> s!==e.target.value)
        setForm({...form, [help]: [...aux]})
    }
    const imageHandler = (e)=>{
        
        setForm({...form, [e.target.name]:e.target.files[0]})
    }

    const checkHandler = (e)=>{

    
        
        if(e.target.checked){
            let aux = form.Diet_type.includes(e.target.id)
            if(!aux){
               setForm({...form, Diet_type:[...form.Diet_type, e.target.id]}) 
            }
        }
        if(!e.target.checked){
          let aux= form.Diet_type.filter(d=>d!==e.target.id)
          setForm({...form, Diet_type:aux})  
        }
    }
   
    const sendHandler = (e)=>{
        e.preventDefault()
    
    let trys = []
    const formData = formdataCreator(form)
    for (const pair of formData.entries()) {
    trys.push({[pair[0]]: pair[1]})
  }

   if(trys[1].title!=="undefined"){
    dispatch(createRecipe(formData))
     
         setForm({title:"",
         summary:"",
         healthScore:0,
         steps:[],
         dishTypes:[],
         readyInMinutes:0,
         ingredients:[],
         servings:0,
         image:"",
         Diet_type:[]})
        history.push("/home")   
                        }      
    }
    return(
        <>
        <div className={styles.div} >
        <h1>Create your own recipe!</h1>
        
        <form id="form"  encType="multipart/form-data" method="POST" onSubmit={sendHandler}>
        <div className={styles.divTitle}>
                
                <input type="text" required class="form-control" placeholder="Write the title..." name="title" value={form.title} onChange={changeHandler}></input>
            </div>
           <div className={styles.divCont}>
            <div >
            <div className={styles.divSum}>
                <h2>Describe your recipe *:</h2>
                <textarea class="form-control" required  placeholder="summary" name="summary" value={form.summary} onChange={changeHandler}></textarea>
            </div> 
            <div className={styles.divHS}>
                <h2>Health Score: {form.healthScore}</h2>
                <input type="range" placeholder="healthScore" name="healthScore" min="1" max="100" step="1" value={form.healthScore} onChange={changeHandler} ></input>
            </div>  
            </div>
            <div className={styles.divD_T}>
                <h2>Select the diet type *</h2>
                <div >
                    {diets?.map(d=><label><input type="checkbox" class="form-check-input mt-0"  name="Diet_type" key={d.id} onChange={checkHandler} id={d.id}/>{d.name}</label>)}
                </div>
            </div>
            </div>
            <div className={styles.divCont}>
                <div>
                     <div className={styles.divSteps}>
                     <h3>Steps to prepare it</h3>
                     <input type="text" name="steps" value={steps} onChange={(e)=>{setSteps(e.target.value)}} onKeyDown={stepHandler} placeholder="Steps"></input>
                        <div>
                        <h5>Steps:</h5>
                     {form.steps.length>0? form.steps.map(e=><li>{e}<button className={styles.buttons} value={e} name="steps" onClick={deleteHandler}>x</button></li>) : "Add the steps of your recipe!"}
                     </div>    
                    </div>
                </div>
                <div>
                <div className={styles.divIng}>
                <h3>Add Ingredients</h3>
            <input type="text" name="ingredients" value={ingredients} onChange={(e)=>{setIngredients(e.target.value)}} onKeyDown={stepHandler} placeholder="Ingredients"></input>
            <div>
                <h5>Ingrediets:</h5>
                {form.ingredients.length>0? form.ingredients.map(e=><li>{e}<button className={styles.buttons}value={e} name="ingredients" onClick={deleteHandler}>x</button></li>) : "Add the ingredients of your recipe!"}
            </div>    
            </div>
                </div>
            </div>
            
            
            
            
            
            <div className={styles.divCont}>
                <div>
                   <div className={styles.divDT}>
                <h3>Dish types:</h3>
            <input type="text" name="dishTypes" value={dishTypes} onChange={(e)=>{setDishType(e.target.value)}} onKeyDown={stepHandler} placeholder="Dish types"></input>
            <div>
                <h5>Added:</h5>
                {form.dishTypes.length>0? form.dishTypes.map(e=><li>{e}<button className={styles.buttons} value={e} name="dishTypes" onClick={deleteHandler}>x</button></li>) : "Add the dish types of your recipe!"}
            </div>    
            </div> 
                </div>

                <div className={styles.cont2}>
                <div className={styles.divRiM}>
                <h3>Ready in ... minutes:</h3>
                <input className={styles.number} name="readyInMinutes" value={form.readyInMinutes} onChange={changeHandler} type="number"></input>
            </div>
            <div className={styles.divSer}>
                <h3>Servings:</h3>
                <input className={styles.number} name="servings" value={form.servings} onChange={changeHandler} type="number"></input>
            </div>
                </div>
            </div>

<div><div className={styles.button}><input  type="file" name="image" onChange={imageHandler}></input>
            </div>
<div className={styles.button} ><input type="submit" ></input>
       </div></div>

             </form>
        </div>
        </>
    )
}
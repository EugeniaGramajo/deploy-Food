export default function check (form){
console.log("antes de los if", form)
    if(form.title===""){
        throw new Error("Missing tittle")
    }
    if(form.summary===""){
        throw new Error("Missing summary")
    }
    if(!Array.isArray(form.steps)){
        throw new Error("invalid format steps")
    }
    if(!Array.isArray(form.dishTypes)){
        throw new Error("invalid format dishtypes")
    }
    if(!Array.isArray(form.ingredients)){
        throw new Error("invalid format ingredients")
    }
    if(!Array.isArray(form.Diet_type)){
        throw new Error("invalid format diet type")
    }
    if(form.Diet_type.length===0){
        alert("Must select a diet type ")
        return {}
    }
    if(form.servings===""){
         alert("invalid format serving")
         return {}
    }
    if(form.readyInMinutes===""){
         alert("invalid format serving")
         return {}
    }

    return form

}
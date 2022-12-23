import check from "./check"

export default function formdataCreator(f){

    const form=check(f)
    
    
    
    const formData = new FormData()

                
    formData.append("image",form.image)
    formData.append("title",form.title)
    formData.append("summary",form.summary)
    formData.append("healthScore",form.healthScore)
    formData.append("steps",form.steps)
    formData.append("dishTypes",form.dishTypes)
    formData.append("readyInMinutes",form.readyInMinutes)
    formData.append("ingredients",form.ingredients)
    formData.append("servings",form.servings)
    formData.append("Diet_type",form.Diet_type)
   

    return formData
}
import { Drink } from "../types/drink";

export const getIngredientsWithMeasurements=(recipe:Drink)=>{
    let ingredients:string[]=[];
    let measurements:string[]=[];
    
    Object.entries(recipe).filter(([key, value])=>{
    if(key.includes('strIngredient') && value != null){
      ingredients.push(value);
    }else if(key.includes('strMeasure') && value != null){
      measurements.push(value);
    }
    });

    const ingredientsWithMeasurements :{[index:string]:string} = {};

    ingredients.forEach((ingredient, index)=>{
      measurements[index] ? ingredientsWithMeasurements[ingredient] = measurements[index] : ingredientsWithMeasurements[ingredient] = "-" ;
    })

    return ingredientsWithMeasurements;
}



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Drink } from "../../types/drink";
import Recipe from "../../components/Recipe/Recipe";
import { getIngredientsWithMeasurements } from "../../scripts/getIngredientsWithMeasurements";

const RecipeDisplay = () => {
    const [recipe, setRecipe] = useState({} as Drink);
    const {drinkId} = useParams();
    const url = `https:/thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
  
    useEffect(()=>{
      fetch(url)
      .then(response => response.json())
      .then(data=> setRecipe(data.drinks[0]));
    },[drinkId]) 

 /*    let ingredients:string[]=[];
    let measurements:string[]=[];

    Object.entries(recipe).filter(([key, value])=>{
    if(key.includes('strIngredient') && value != null){
     // console.log(value);
      ingredients.push(value);
    }else if(key.includes('strMeasure') && value != null){
      measurements.push(value);
    }
  });
 

  const ingredientsWithMeasurements :{[index:string]:string} = {};

  ingredients.forEach((ingredient, index)=>{
    measurements[index] ? ingredientsWithMeasurements[ingredient] = measurements[index] : ingredientsWithMeasurements[ingredient] = "-" ;
  })
 */
const ingredientsWithMeasurements = getIngredientsWithMeasurements(recipe);
  
  return (
    <>
    <Recipe recipe={recipe} ingredientsWithMeasurements={ingredientsWithMeasurements} key={recipe.idDrink}/>
    </>
  )
}

export default RecipeDisplay

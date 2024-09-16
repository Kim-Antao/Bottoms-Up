import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Drink } from "../../types/drink";
import Recipe from "../../components/Recipe/Recipe";
import { getIngredientsWithMeasurements } from "../../scripts/getIngredientsWithMeasurements";

const RecipeDisplay = () => {
    const [recipe, setRecipe] = useState({} as Drink);
    const {drinkId} = useParams();
    const url = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
  
    useEffect(()=>{
      fetch(url)
      .then(response => response.json())
      .then(data=> setRecipe(data.drinks[0]));
    },[drinkId]) 

 
const ingredientsWithMeasurements = getIngredientsWithMeasurements(recipe);
  
  return (
    <>
      {recipe.idDrink ? <Recipe recipe={recipe} ingredientsWithMeasurements={ingredientsWithMeasurements} key={recipe.idDrink}/> : <p>Loading...</p>}
    </>
  )
}

export default RecipeDisplay

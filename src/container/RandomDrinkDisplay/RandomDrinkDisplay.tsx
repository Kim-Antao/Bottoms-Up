import { useEffect, useState } from "react";
import { getIngredientsWithMeasurements } from "../../scripts/getIngredientsWithMeasurements";
import { Drink } from "../../types/drink";
import Recipe from "../../components/Recipe/Recipe";

const RandomDrinkDisplay = () => {
    const [randomDrink, setRandomDrink] = useState({} as Drink);
    const url = 'https://thecocktaildb.com/api/json/v1/1/random.php';

    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>setRandomDrink(data.drinks[0]));
//.then(data=> console.log(data.drinks[0]));

    },[])
const ingredientsWithMeasurements = getIngredientsWithMeasurements(randomDrink);
    // console.log(randomDrink);
  return (
       <>
    <Recipe recipe={randomDrink} ingredientsWithMeasurements={ingredientsWithMeasurements} key={`${randomDrink.idDrink}2`}/>
    <h2>here</h2>
    </>
  )
}

export default RandomDrinkDisplay

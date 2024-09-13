import { useEffect, useState } from "react";
import { getIngredientsWithMeasurements } from "../../scripts/getIngredientsWithMeasurements";
import { Drink } from "../../types/drink";
import Recipe from "../../components/Recipe/Recipe";

const RandomDrinkDisplay = () => {
  const [randomDrink, setRandomDrink] = useState({} as Drink);
  const url = 'https://thecocktaildb.com/api/json/v1/1/random.php';
  const ingredientsWithMeasurements = getIngredientsWithMeasurements(randomDrink);

  useEffect(()=>{
      fetch(url)
      .then(response=>response.json())
      .then(data=>setRandomDrink(data.drinks[0]));
  },[])

  return (
    <>
      <Recipe recipe={randomDrink} ingredientsWithMeasurements={ingredientsWithMeasurements} key={`${randomDrink.idDrink}2`}/>
    </>
  )
}

export default RandomDrinkDisplay
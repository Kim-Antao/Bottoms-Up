import { useEffect, useState } from "react";
import { getIngredientsWithMeasurements } from "../../scripts/getIngredientsWithMeasurements";
import { Drink } from "../../types/drink";
import Recipe from "../../components/Recipe/Recipe";

const RandomDrinkDisplay = () => {
  const [randomDrink, setRandomDrink] = useState({} as Drink);
  const [isLoading, setIsLoading] = useState(true);
  const url = 'https://thecocktaildb.com/api/json/v1/1/random.php';
  const ingredientsWithMeasurements = getIngredientsWithMeasurements(randomDrink);

  useEffect(()=>{
      fetch(url)
      .then(response=>response.json())
      .then(data=>{
        setRandomDrink(data.drinks[0])
        setIsLoading(false);
      });
  },[])

/*   useEffect(()=>{
    setIsLoading(!isLoading);
  },[randomDrink]) */
  return (
    <>
      {!isLoading && randomDrink && <Recipe recipe={randomDrink} ingredientsWithMeasurements={ingredientsWithMeasurements} key={`${randomDrink.idDrink}2`}/>}
    </>
  )
}

export default RandomDrinkDisplay
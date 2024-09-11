import { useEffect, useState } from 'react';
import './Recipes.scss';
import { useParams } from 'react-router-dom';
import { drink } from '../../types/drink';

const Recipes = () => {
  const [recipe, setRecipe] = useState({} as drink);
  const {drinkId} = useParams();
  const url = `https:/thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;

  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(data=> setRecipe(data.drinks[0]));
  },[drinkId]) 

  const recipeInfo = (Object.entries(recipe)).reduce((acc,[key, value])=>{
    acc.push[key,value];
  },([]));
  //const Ingredients = recipe.reduce(acc, )

  return  (
    <div>
      <div className='recipe__container'>
        <div className='recipe__image'>
          <img src={recipe.strDrinkThumb} alt="" />
        </div>
        <div className='recipe__content'>
          <h2>Name: {recipe.strDrink}</h2>
          <p>Type: {recipe.strAlcoholic}</p>
          <ul>Ingredients
<li></li>
          </ul>
          <ul>Quantity
<li></li>
          </ul>
          <p>
            Instructions: {recipe.strInstructions}
          </p>
        </div>
       
        {/* <h2>{drinks.st}</h2>
        <img srDrinkrc={drinks.strDrinkThumb} alt="" />
        <div>
          Instructions
          <ul>
            <li>{drinks.strIngredient1}</li>
            <li>{drinks.strIngredient2}</li>
            <li>{drinks.strIngredient3}</li>
            <li>{drinks.strIngredient4}</li>
            <li></li>
          </ul> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Recipes

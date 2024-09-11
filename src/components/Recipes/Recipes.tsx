import { useEffect, useState } from 'react';
import './Recipes.scss';
import { useParams } from 'react-router-dom';
import { Drink } from '../../types/drink';

const Recipes = () => {
  const [recipe, setRecipe] = useState({} as Drink);
  const {drinkId} = useParams();
  const url = `https:/thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;

  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(data=> setRecipe(data.drinks[0]));
  },[drinkId]) 

/*   const recipeInfo = Object.entries(recipe).reduce((acc,[key, value])=>{
   // acc.push[key,value];
  if(key.includes('strIngredient') && value != null){
    console.log(value);

  }

  },([] as [string, string][])); */
  //const Ingredients = recipe.reduce(acc, )
let ingredients:string[]=[];
let measurements:string[]=[];

Object.entries(recipe).filter(([key, value])=>{
    if(key.includes('strIngredient') && value != null){
     // console.log(value);
      ingredients.push(value);
    }else if(key.includes('strMeasure') && value != null){
      measurements.push(value);
    }
  });
 

  //const mergeArraysToObjects = (keys:string[], value:string[]) : {key:}
/* 
  const mergedArray = Object.assign({ingredients},measurements);
  console.log(mergedArray); */

  const merged :{[index:string]:string} = {};

  ingredients.forEach((ingredient, index)=>{
    merged[ingredient] = measurements[index];
  })

/*   const mergeArraysToObjects = (ingredients: string[], measurements: string[]): { [key: string]: string }[] => {
    let result = [];
    for (let i = 0; i < ingredients.length; i++) {
        let obj: { [key: string]: string } = {};
        obj[ingredients[i]] = measurements[i];
        result.push(obj);
        console.log('result is ', result);
    } return result; 
}
console.log(mergeArraysToObjects); */
 // console.log(merged);
  return  (
    <div>
      <div className='recipe__container'>
        <div className='recipe__image'>
          <img src={recipe.strDrinkThumb} alt="" />
        </div>
        <div className='recipe__content'>
          <h2>{recipe.strDrink}</h2>
          <p>Type: {recipe.strAlcoholic}</p>
          <p>Category: {recipe.strCategory}</p>
          {
            Object.keys(merged).map((key)=>{
              return <li>{key}: {merged[key]}</li>
            })
          }
          {/* {ingredients.map((ingredient, index)=>{
           return <li>{ingredient} - {measurements[index]}</li>
          })}
          <ul>Ingredients
<li></li>
          </ul>
          <ul>Quantity
<li></li>
          </ul> */}
          
          <p>
            Instructions: {recipe.strInstructions}
          </p>
          <p> Glass Used: {recipe.strGlass}</p>
        </div>
       
       
      </div>
    </div>
  )
}

export default Recipes

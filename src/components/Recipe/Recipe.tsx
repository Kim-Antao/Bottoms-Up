import './Recipe.scss';
import { Drink } from '../../types/drink';

type RecipeProps = {
  recipe: Drink;
  ingredientsWithMeasurements: {[index: string]:string};
}

const Recipe = ({recipe, ingredientsWithMeasurements}:RecipeProps) => {

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
            Object.keys(ingredientsWithMeasurements).map((key,index)=>{
              return <li key={index}>{key}: {ingredientsWithMeasurements[key]}</li>
            })
          } 
          <p>
            Instructions: {recipe.strInstructions}
          </p>
          <p> Glass Used: {recipe.strGlass}</p>
        </div>
       
       
      </div>
    </div>
  )
}

export default Recipe

import "./Drinks.scss";
import DrinkTile from "../DrinkTile/DrinkTile";
import { drinkCategory } from "../../types/drinks";


type DrinksProps ={
   drinkList: drinkCategory[];
}



const Drinks = ({ drinkList}:DrinksProps) => {
  return (
    <>
     { drinkList.length === 0 ? <p>Oops!! Try another drink name</p> : drinkList.map((drink) => (<DrinkTile name={drink.strDrink} image={drink.strDrinkThumb} id={drink.idDrink} key={drink.idDrink}/> ))}
    </>
  )
}

export default Drinks

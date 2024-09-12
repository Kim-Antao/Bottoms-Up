import DrinkTile from "../DrinkTile/DrinkTile";
import { DrinkCategory } from "../../types/drink";


type DrinksProps ={
   drinkList: DrinkCategory[];
   searchTerm: string;
}

const Drinks = ({ drinkList, searchTerm}:DrinksProps) => {

  const filteredDrinks = drinkList.filter((drink) => drink.strDrink.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
     { filteredDrinks.length === 0 ? <p>Oops!! Try another drink name</p> : filteredDrinks.map((drink) => (<DrinkTile name={drink.strDrink} image={drink.strDrinkThumb} id={drink.idDrink} key={drink.idDrink}/> ))}
    </>
  )
}

export default Drinks

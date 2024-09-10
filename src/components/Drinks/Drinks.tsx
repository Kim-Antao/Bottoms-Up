// import React from 'react'
import "./Drinks.scss";
import DrinkTile from "../DrinkTile/DrinkTile";
import { drinks } from "../../types/drinks";


type DrinksProps ={
    //heading: string;
   drinkList: drinks[];
}



const Drinks = ({ drinkList}:DrinksProps) => {
  // const filteredDrinks = drinkList.filter((drinkList.strDrinks))
  return (
    <>
        {/* <h2 className="drinks-container__heading">{
        heading.length === 0 ? "All Drinks" : heading
        }</h2> */}
      {/* { drinkList.map((drink) => (<DrinkTile name={drink.strDrink} image={drink.strDrinkThumb} key={drink.idDrink} /> )).slice(0,4)} */}
      { drinkList.length === 0 ? <p>Oops!! Try another drink name</p> : drinkList.map((drink) => (<DrinkTile name={drink.strDrink} image={drink.strDrinkThumb} key={drink.idDrink} /> ))}

    </>
  )
}

export default Drinks

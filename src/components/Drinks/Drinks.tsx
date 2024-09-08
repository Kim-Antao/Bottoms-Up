// import React from 'react'
import "./Drinks.scss";
import DrinkTile from "../DrinkTile/DrinkTile";

type drinks = {
  strDrink: string,
  strDrinkThumb: string,
  idDrink: string,
}

type DrinksProps ={
    heading: string;
   drinkList: drinks[];
}



const Drinks = ({heading, drinkList}:DrinksProps) => {
  
  return (
    <div className="drinks-container">
        <h2>{heading}</h2>
 { drinkList.map((drink) => (<DrinkTile name={drink.strDrink} image={drink.strDrinkThumb} key={drink.idDrink}/> )).slice(0,4)}

    </div>
  )
}

export default Drinks

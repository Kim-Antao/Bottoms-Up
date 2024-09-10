//import React from 'react'

import { FormEventHandler } from "react"

type FilterProps ={
  drinkCategory: string,
  handleTypeSelected: (FormEventHandler<HTMLInputElement>)
}

const Filter = ({drinkCategory,handleTypeSelected}:FilterProps) => {
 

  return (
  /*   {/* <div className="filter-tab">
        <button className="filter-tab__links">All</button>
        <button className="filter-tab__links">Alcoholic</button>
        <button className="filter-tab__links">Non-Alcoholic</button>
    </div> */
  <div>
    {/* <label htmlFor="typeOfDrink">
      Filter By:
      <select id="typeOfDrink" value={drinkCategory} onChange={handleTypeSelected}>
        <option value="all">All</option>
        <option value="alcoholic">Alcoholic</option>
        <option value="non-alcoholic">Non-Alcoholic</option>
      </select>
    </label> */}
    <label htmlFor="allDrinks">All </label>
      <input type="radio" name="drink-category" value="all" id="allDrinks" checked={drinkCategory==="all"} onChange={handleTypeSelected} />
     
    <label htmlFor="alcDrinks">Alcoholic </label>
      <input type="radio" name="drink-category" value="alcoholic" id="alcDrinks" onChange={handleTypeSelected} />
   
    <label htmlFor="nonAlcDrinks">Non-Alcoholic</label>
      <input type="radio" name="drink-category" value="non-alcoholic" id="nonAlcDrinks" onChange={handleTypeSelected} />
  </div>
  )
}

export default Filter

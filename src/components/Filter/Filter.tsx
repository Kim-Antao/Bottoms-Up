//import React from 'react'

import { FormEventHandler } from "react"

type FilterProps ={
  drinkCategory: string,
  handleTypeSelected: (FormEventHandler<HTMLSelectElement>)
}

const Filter = ({drinkCategory,handleTypeSelected}:FilterProps) => {
 

  return (
  /*   {/* <div className="filter-tab">
        <button className="filter-tab__links">All</button>
        <button className="filter-tab__links">Alcoholic</button>
        <button className="filter-tab__links">Non-Alcoholic</button>
    </div> */
  <div>
    <label htmlFor="typeOfDrink">
      Filter By:
      <select id="typeOfDrink" value={drinkCategory} onChange={handleTypeSelected}>
        <option value="all">All</option>
        <option value="alcoholic">Alcoholic</option>
        <option value="non-alcoholic">Non-Alcoholic</option>
      </select>
    </label>
  </div>
  )
}

export default Filter

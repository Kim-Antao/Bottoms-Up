import './Filter.scss';
import { FormEventHandler } from "react"

type FilterProps = {
  drinkCategory: string,
  handleTypeSelected: (FormEventHandler<HTMLInputElement>),
}

const Filter = ({drinkCategory,handleTypeSelected}:FilterProps) => {
 
  return (
    <div className='filter-container'>
      <label className='filter-container__item-label' htmlFor="allDrinks">All </label>
      <input className='filter-container__item-radiobtn' type="radio" name="drink-category" value="all" id="allDrinks" checked={drinkCategory==="all"} onChange={handleTypeSelected} />

      <label className='filter-container__item-label' htmlFor="alcDrinks">Alcoholic </label>
      <input className='filter-container__item-radiobtn' type="radio" name="drink-category" value="alcoholic" id="alcDrinks" onChange={handleTypeSelected} />

      <label className='filter-container__item-label' htmlFor="nonAlcDrinks">Non-Alcoholic</label>
      <input className='filter-container__item-radiobtn' type="radio" name="drink-category" value="non-alcoholic" id="nonAlcDrinks" onChange={handleTypeSelected} />
    </div>
  )
}

export default Filter

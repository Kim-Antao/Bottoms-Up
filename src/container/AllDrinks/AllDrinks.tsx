import DrinkTile from '../../components/DrinkTile/DrinkTile';
import SearchBox from '../../components/SearchBox/SearchBox';
import './AllDrinks.scss';
import { FormEvent, useState } from 'react';
import { drinks } from '../../types/drinks';
import Drinks from '../../components/Drinks/Drinks';
import Filter from '../../components/Filter/Filter';

type AllDrinksProps = {
  alDrinks: drinks[],
  nonAlDrinks: drinks[],
}

const AllDrinks = ({alDrinks, nonAlDrinks}: AllDrinksProps) => {
  // console.log('drinks array ', drinks)
  const [searchTerm, setSearchTerm] = useState("");
  let drinks = [...alDrinks, ...nonAlDrinks];

  const handleSearchInput = (event: FormEvent<HTMLInputElement>) => {
   setSearchTerm(event.currentTarget.value);
  }

  const [drinkCategory, setdrinkCategory]=useState('all');

  const handleTypeSelected = (event: FormEvent<HTMLSelectElement>) => {
    setdrinkCategory(event.currentTarget.value)
    
  //  console.log(drinkCategory);
  }
  // console.log('search term', searchTerm);
  
 // console.log(drinkCategory);
 if(drinkCategory === "all"){
  drinks = [...alDrinks, ...nonAlDrinks];

}else if(drinkCategory === "alcoholic"){
  drinks = [...alDrinks];

}else if(drinkCategory === "non-alcoholic"){
  drinks = [...nonAlDrinks];
  
}
//  console.log(drinks);
  const filteredDrinks = drinks.filter((drink) => drink.strDrink.toLowerCase().includes(searchTerm.toLowerCase()));
// console.log('filtered drinks array ',filteredDrinks);
  return (
    <div className='alldrinks-container'>
      <div className="alldrinks-container__header">
      <Filter drinkCategory={drinkCategory} handleTypeSelected={handleTypeSelected}/>
      <h2 className="alldrinks-container__heading">{
        //searchTerm.length === 0 ? "All Drinks" : drinkCategory.toUpperCase()
       drinkCategory[0].toUpperCase()+drinkCategory.slice(1)
       } Drinks</h2>
      <SearchBox searchTerm={searchTerm} handleSearchInput={handleSearchInput}/>
      

      </div>
      <div className='alldrinks-container__content'>
      <Drinks drinkList={filteredDrinks}/>

      </div>
    </div>
  )
}

export default AllDrinks

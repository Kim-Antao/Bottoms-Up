import './AllDrinks.scss';
import { FormEvent, useEffect, useState } from 'react';
import { drinkCategory } from '../../types/drinks';
import Drinks from '../../components/Drinks/Drinks';
import Filter from '../../components/Filter/Filter';
import SearchBox from '../../components/SearchBox/SearchBox';

type AllDrinksProps = {
  allDrinks: drinkCategory[],
}


const AllDrinks = ({allDrinks}: AllDrinksProps) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [drinkCategory, setdrinkCategory]=useState('all');
  const [drinksList, setDrinksList]=useState([...allDrinks]);

  
  const handleSearchInput = (event: FormEvent<HTMLInputElement>) => {
     setSearchTerm(event.currentTarget.value);
  }

// Function related radio button filter

  const handleTypeSelected = (event: FormEvent<HTMLInputElement>) => {
    setdrinkCategory(event.currentTarget.value)
  }


useEffect(()=>{
  setDrinksList([...allDrinks]);
},[allDrinks])
 
  // change the drinklist based on radio button selection
  useEffect(()=>{
     if(drinkCategory === "all"){
      setDrinksList([...allDrinks]);
    }else if(drinkCategory === "alcoholic"){
      setDrinksList(allDrinks.filter((drink)=> drink.isAlcoholic));
    }else if(drinkCategory === "non-alcoholic"){
      setDrinksList(allDrinks.filter((drink)=> !drink.isAlcoholic));
    }
  
  },[drinkCategory])


  return (
    
    <div className='alldrinks-container'>
      <div className="alldrinks-container__header">
      <h2 className="alldrinks-container__heading">{
       drinkCategory[0].toUpperCase()+drinkCategory.slice(1)
       } Drinks</h2>
      <SearchBox searchTerm={searchTerm} handleSearchInput={handleSearchInput}/>
      </div>
      <div>
      <Filter drinkCategory={drinkCategory} handleTypeSelected={handleTypeSelected}/>

      </div>
      <div className='alldrinks-container__content'>
        {drinksList.length > 0 ?
      <Drinks drinkList={drinksList} searchTerm={searchTerm}/> : 
      "Loading ..."
        }
      </div>
    </div>
  )
}

export default AllDrinks

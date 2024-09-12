import './AllDrinks.scss';
import { FormEvent, useEffect, useState } from 'react';
import { DrinkCategory } from '../../types/drink';
import Drinks from '../../components/Drinks/Drinks';
import Filter from '../../components/Filter/Filter';
import SearchBox from '../../components/SearchBox/SearchBox';

type AllDrinksProps = {
  allDrinks: DrinkCategory[],
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

  // when the page is refreshed update the drinklist once the api has fetched the data
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

  document.addEventListener('scroll',()=>{
    const navigation = document.querySelector<HTMLElement>('.alldrinks__header-container')!;
    if (window.scrollY > 0){
      navigation.classList.add('alldrinks__header-container--scrolled');
    }else{
      navigation.classList.remove('alldrinks__header-container--scrolled');

    }
  })

  return (
    
    <div className='alldrinks'>
      <div className='alldrinks__header-container'>
        <div className="alldrinks__header">
          <h2 className="alldrinks__heading">{
          drinkCategory[0].toUpperCase()+drinkCategory.slice(1)
          } Drinks</h2>
          <SearchBox searchTerm={searchTerm} handleSearchInput={handleSearchInput}/>
        </div>
        <Filter drinkCategory={drinkCategory} handleTypeSelected={handleTypeSelected}/>
      </div>
      <div className='alldrinks__content'>
        {drinksList.length > 0 ?
          <Drinks drinkList={drinksList} searchTerm={searchTerm}/> : 
          "Loading ..."}
      </div>
    </div>
  )
}

export default AllDrinks

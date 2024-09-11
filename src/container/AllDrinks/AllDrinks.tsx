import './AllDrinks.scss';
import { FormEvent, useEffect, useState } from 'react';
import { drinkCategory } from '../../types/drinks';
import Drinks from '../../components/Drinks/Drinks';
import Filter from '../../components/Filter/Filter';
import SearchBox from '../../components/SearchBox/SearchBox';

type AllDrinksProps = {
/*   alDrinks: drinkCategory[],
  nonAlDrinks: drinkCategory[], */
  allDrinks: drinkCategory[],
  //loaded: boolean
}


const AllDrinks = ({allDrinks}: AllDrinksProps) => {



/*   const alcoholic = alDrinks.map((al)=>{
  return{
    ...al,
    flag: 'AL',
  }
  });
 */
  /* const nonAlcoholic = nonAlDrinks.map((nonAl)=>{
    return{
      ...nonAl,
      flag: 'NON',
    }
  }) */

  // const drinks = [...alcoholic, ...nonAlcoholic];

  
  // shuffle();

// Function related to search box
const [searchTerm, setSearchTerm] = useState("");

const handleSearchInput = (event: FormEvent<HTMLInputElement>) => {
   setSearchTerm(event.currentTarget.value);
  }

// Function related radio button filter
  const [drinkCategory, setdrinkCategory]=useState('all');

  const handleTypeSelected = (event: FormEvent<HTMLInputElement>) => {
    setdrinkCategory(event.currentTarget.value)
  }

const [drinksList, setDrinksList]=useState([...allDrinks]);

  //console.log('all drinks ',allDrinks);
useEffect(()=>{
  setDrinksList([...allDrinks]);
},[allDrinks])
  //const [filteredDrinks, setFilteredDrinks]=useState([]);


  // change the drinklist based on radio button selection
  useEffect(()=>{
     if(drinkCategory === "all"){
      setDrinksList([...allDrinks]);
    }else if(drinkCategory === "alcoholic"){
      setDrinksList(allDrinks.filter((drink)=> drink.flag==="AL"));
      //return;
    }else if(drinkCategory === "non-alcoholic"){
      setDrinksList(allDrinks.filter((drink)=> drink.flag==="NON"));
      //return;
    }
    //setDrinksList([...allDrinks]);
   /* setFilteredDrinks(drinksList.filter((drink) => {
   return drink.strDrink.toLowerCase().includes(searchTerm.toLowerCase())}));
    */ 
  },[drinkCategory])


  console.log('drinks in state variable',drinksList);
/*   const filteredDrinks = [...drinks];

  if(drinkCategory === "all"){
     filteredDrinks = [...drinks];
  
  }else if(drinkCategory === "alcoholic"){
    filteredDrinks = drinks.filter();
  
  }else if(drinkCategory === "non-alcoholic"){
    drinks = [...nonAlDrinks];
    
  }  */
 /*    const [filteredDrinks, setFilteredDrinks] = useState([]); 
    
    setFilteredDrinks(() => {
      drinks.filter((drink) => drink.strDrink.toLowerCase().includes(searchTerm.toLowerCase()))
}); */

    // if(drinkCategory === "alcholic"){
   const filteredDrinks = drinksList.filter((drink) => drink.strDrink.toLowerCase().includes(searchTerm.toLowerCase()));
   console.log('filtered drinks', filteredDrinks)      



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
      <Drinks drinkList={filteredDrinks}/>
      </div>
    </div>
  )
}

export default AllDrinks

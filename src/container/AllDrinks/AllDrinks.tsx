import './AllDrinks.scss';
import { FormEvent, useEffect, useState } from 'react';
import { drinks } from '../../types/drinks';
import Drinks from '../../components/Drinks/Drinks';
import Filter from '../../components/Filter/Filter';
import SearchBox from '../../components/SearchBox/SearchBox';

type AllDrinksProps = {
  alDrinks: drinks[],
  nonAlDrinks: drinks[],
}


const AllDrinks = ({alDrinks, nonAlDrinks}: AllDrinksProps) => {

  const [searchTerm, setSearchTerm] = useState("");


  const alcoholic = alDrinks.map((al)=>{
  return{
    ...al,
    flag: 'AL',
  }
  });

  const nonAlcoholic = nonAlDrinks.map((nonAl)=>{
    return{
      ...nonAl,
      flag: 'NON',
    }
  })

  const drinks = [...alcoholic, ...nonAlcoholic];

  const shuffle = () => {
    let currentIndex = drinks.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [drinks[currentIndex], drinks[randomIndex]] = [drinks[randomIndex], drinks[currentIndex]];
    }
  }

  shuffle();


  const handleSearchInput = (event: FormEvent<HTMLInputElement>) => {
   setSearchTerm(event.currentTarget.value);
  }

  const [drinkCategory, setdrinkCategory]=useState('all');

  const handleTypeSelected = (event: FormEvent<HTMLSelectElement>) => {
    setdrinkCategory(event.currentTarget.value)
  }

  const [drinksList, setDrinksList]=useState([...alcoholic, ...nonAlcoholic]);

  useEffect(()=>{
    if(drinkCategory === "all"){
      setDrinksList(drinks);
    }else if(drinkCategory === "alcoholic"){
      setDrinksList(drinks.filter((drink)=> drink.flag==="AL"));
    }else if(drinkCategory === "non-alcoholic"){
      setDrinksList(drinks.filter((drink)=> drink.flag==="NON"));
    }
    
  },[drinkCategory])

  console.log(drinksList);
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
         



  return (
    <div className='alldrinks-container'>
      <div className="alldrinks-container__header">
      <Filter drinkCategory={drinkCategory} handleTypeSelected={handleTypeSelected}/>
      <h2 className="alldrinks-container__heading">{
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

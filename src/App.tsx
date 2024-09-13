import { useState, useEffect } from 'react'
import './App.scss'
import Nav from './components/Nav/Nav';
import Home from './container/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllDrinks from './container/AllDrinks/AllDrinks';
import { DrinkCategory } from './types/drink';
import { shuffle } from './scripts/shuffle';
import RandomDrinkDisplay from './container/RandomDrinkDisplay/RandomDrinkDisplay';
import RecipeDisplay from './container/RecipeDisplay/RecipeDisplay';
import Footer from './components/Footer/Footer';

function App() {

  const [alcholicDrinks, setAlcoholicDrinks] = useState([]);
  const[nonAlcoholicDrinks, setNonAlcoholicDrinks] = useState([]);
  const [allDrinks, setAllDrinks] = useState([]);

  useEffect(()=>{
    fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        setAlcoholicDrinks(data.drinks.map((al: DrinkCategory)=>{
            return{
              ...al,
              isAlcoholic: true,
            }
          })
        );
      });
    
    fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    .then(resp => {
      return resp.json()
    })
    .then(data => {
      setNonAlcoholicDrinks(data.drinks.map((nonAl: DrinkCategory)=>{
        return{
          ...nonAl,
          isAlcoholic: false,
        }
      })
    );
    });
  },[]) 

  useEffect(()=>{
    setAllDrinks([...alcholicDrinks, ...nonAlcoholicDrinks]);
  },[alcholicDrinks,nonAlcoholicDrinks])

  shuffle(allDrinks);

  return (
    <>
      <BrowserRouter>
        <Nav/>  
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/drinks' element={allDrinks && <AllDrinks allDrinks={allDrinks}/>}/>
          <Route path='/drinks/:drinkId' element={<RecipeDisplay/>} />
          <Route path='/random' element={<RandomDrinkDisplay/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

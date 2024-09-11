import { useState, useEffect } from 'react'
import './App.scss'
import Nav from './components/Nav/Nav';
import LandingPage from './components/LandingPage/LandingPage';
import video from '../src/assets/media/homepage-video.mp4';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllDrinks from './container/AllDrinks/AllDrinks';
import Recipes from './components/Recipes/Recipes';
import { DrinkCategory } from './types/drink';


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

  const shuffle = () => {
    let currentIndex = allDrinks.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [allDrinks[currentIndex], allDrinks[randomIndex]] = [allDrinks[randomIndex], allDrinks[currentIndex]];
    }
  }

  shuffle();

  return (
    <>

      <BrowserRouter>
      <Nav/>
        
        <Routes>
          <Route path='/' element={<LandingPage video={video} heading='MIXOLOGIST' para='Savour the elegance and sophistication of a perfectly balanced cocktail.' buttonLabel='Explore'/>}/>
          <Route path='/drinks' element={allDrinks && <AllDrinks allDrinks={allDrinks}/>}/>
          {/* <Route path='/drinks' element={alcholicDrinks && nonAlcoholicDrinks && <AllDrinks alDrinks={alcholicDrinks} nonAlDrinks={nonAlcoholicDrinks}/>}/> */}
          <Route path='/drinks/:drinkId' element={<Recipes/>} />
          </Routes>
      </BrowserRouter>
      {/* <LandingPage video={video} heading='MIXOLOGIST' para='Savour the elegance and sophistication of a perfectly balanced cocktail.' buttonLabel='Explore'/>
      {alcholicDrinks && <Drinks heading='Alcholic' drinkList={alcholicDrinks}/>}
      {nonAlcoholicDrinks && <Drinks heading='Non-Alcholic' drinkList={nonAlcoholicDrinks}/>}
      */} {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App

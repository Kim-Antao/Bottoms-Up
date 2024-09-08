import { useState, useEffect } from 'react'
import './App.scss'
import LandingPage from './components/LandingPage/LandingPage';
import video from '../src/assets/media/homepage-video.mp4';
import Drinks from './components/Drinks/Drinks';

function App() {
//  const [count, setCount] = useState(0);


  const [alcholicDrinks, setAlcoholicDrinks] = useState(null);
  const[nonAlcoholicDrinks, setNonAlcoholicDrinks] = useState(null);

  useEffect(()=>{
    fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        setAlcoholicDrinks(data.drinks);
     //   console.log(alcholicDrinks)
      });
    
    fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    .then(resp => {
      return resp.json()
    })
    .then(data => {
      setNonAlcoholicDrinks(data.drinks)
    });
  },[])

 
  return (
    <>
      <LandingPage video={video} heading='MIXOLOGIST' buttonLabel='Explore'/>
      {alcholicDrinks && <Drinks heading='Alcholic' drinkList={alcholicDrinks}/>}
      {nonAlcoholicDrinks && <Drinks heading='Non-Alcholic' drinkList={nonAlcoholicDrinks}/>}
      {/* <div>
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

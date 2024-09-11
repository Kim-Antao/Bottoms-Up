import { useState, useEffect } from 'react'
import './App.scss'
import Nav from './components/Nav/Nav';
import LandingPage from './components/LandingPage/LandingPage';
import video from '../src/assets/media/homepage-video.mp4';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllDrinks from './container/AllDrinks/AllDrinks';
import Recipes from './components/Recipes/Recipes';
import { drinkCategory } from './types/drinks';
import RandomDrink from './components/RandomDrink/RandomDrink';


function App() {

  const [alcholicDrinks, setAlcoholicDrinks] = useState([]);
  const[nonAlcoholicDrinks, setNonAlcoholicDrinks] = useState([]);
  const [allDrinks, setAllDrinks] = useState([]);
//  const [IndividualDrink, setIndividualDrink] = useState([]);
  //const [loaded, setLoaded] = useState(false);

/*   const baseAlUrl = 'https://thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';
  const baseNonAlurl = 'https://thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

  const getAlDrinks = async() =>{
    const response = await fetch(baseAlUrl);
    const data = await response.json();
    return data.drinks;
  }

  useEffect(()=>{
    async()=>{
      const AlDrink = await getAlDrinks;
      setAlcoholicDrinks(AlDrink.map((al: drinkCategory)=>{
        return{
          ...al,
          flag: 'AL',
        }
      }))

    }
  },[]) */

  useEffect(()=>{
    fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .then(resp => {
        return resp.json()
      })
      .then(data => {
       // setAlcoholicDrinks(data.drinks);
        setAlcoholicDrinks(data.drinks.map((al: drinkCategory)=>{
            return{
              ...al,
              flag: 'AL',
            }
          })
        );
     //   console.log(alcholicDrinks)
      });
    
    fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    .then(resp => {
      return resp.json()
    })
    .then(data => {
      setNonAlcoholicDrinks(data.drinks.map((nonAl: drinkCategory)=>{
        return{
          ...nonAl,
          flag: 'NON',
        }
      })
    );
    });
  },[]) 
  //console.log(alcholicDrinks);

  useEffect(()=>{
    setAllDrinks([...alcholicDrinks, ...nonAlcoholicDrinks]);
    //setLoaded(true);
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

/*   const dummy = {
        idDrink: "11007",
        strDrink: "Margarita",
        strTags: "IBA,ContemporaryClassic",
        strCategory: "Ordinary Drink",
        strIBA: "Contemporary Classics",
        strAlcoholic: "Alcoholic",
        strGlass: "Cocktail glass",
        strInstructions: "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
        strInstructionsDE: "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
        strInstructionsIT: "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
        strIngredient1: "Tequila",
        strIngredient2: "Triple sec",
        strIngredient3: "Lime juice",
        strIngredient4: "Salt",
        strMeasure1: "1 1/2 oz ",
        strMeasure2: "1/2 oz ",
        strMeasure3: "1 oz ",
        strImageSource: "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
        strImageAttribution: "Cocktailmarler",
        strCreativeCommonsConfirmed: "Yes",
        dateModified: "2015-08-18 14:42:59"
      }
     */
  
//console.log(allDrinks)

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

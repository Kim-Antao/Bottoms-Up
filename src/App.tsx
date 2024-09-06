import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  //const [drink, setDrink] = useState([]);

  // useEffect(()=>{
  //   const url = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007";
  //   fetch(url)
  //    .then(res => res.json())
  //   .then(data => (data.json()))
  // //  console.log(data)
  // },[])

useEffect(()=>{
  fetchRows();
},[])

const fetchRows = async () => {
  let rows =[];
  const response = await fetch('https://thecocktaildb.com/api/json/v1/1/lookup.php?i=11007');
  const data = await response.json();
  rows = data;
  console.log(rows);
}

  return (
    <>

      <div>
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
      </p>
    </>
  )
}

export default App

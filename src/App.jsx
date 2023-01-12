import './App.css'
//Components
import Navbar from './Components/Navbar'
import Loading from './Components/Loading'
//Pages
import About from './Pages/About';
import Home from './Pages/Home';
import Error from './Pages/Error';
import SingleCocktail from './Pages/SingleCocktail';
//React imports
import React, {useContext, useState, useEffect, useCallback} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


//Create global context
const AppContext = React.createContext();


export default function App() {
  const [loading, setLoading] = useState(null)
  const [searchTerm, setSearchTerm] = useState('margarita')
  const [cocktails, setCocktails]  = useState([])

  //API
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  
  //FUNCTIONS
  const fetchData = useCallback( async () => {
    setLoading(true);
    
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      console.log(data);
      const { drinks } = data
      
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCocktails(newCocktails)
      } else {
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])

  
  useEffect(() => {
    if(searchTerm){
        fetchData() 
    }
  }, [searchTerm, fetchData])
  
  loading && <Loading />
  
  return (
    <AppContext.Provider value= { { setSearchTerm, searchTerm, cocktails } } >
      <Router>
        <main>
          <Navbar />
          <Routes>
              <Route path= '/' element = { <Home/> } />
              <Route path= '/about' element= { <About/> } />
              <Route path= '/cocktail/:id' element= { <SingleCocktail/> } />
              <Route path= '*' element= { <Error/> } /> 
          </Routes>
        </main>
      </Router>
    </AppContext.Provider>
  )
}

export const useGlobal = () => {
  return useContext(AppContext);
}


    //       try {
    //   const res = await fetch(`${url}${searchTerm}`);
    //   if(!res.ok){
    //       throw new Error(res.statusText)
    //   }
    //   const data = await res.json()
    //   console.log(data)
    //   setCocktails(data)
    // }

  //   const fetchData = async () => {
  //   setLoading(true)
  //   try {
  //     const res = await fetch(`${url}${searchTerm}`)
      
  //     const data = await res.json()
  //     console.log(data)
  //     setCocktails(data)
  //   }
  //   catch(error) {
  //     console.log("ERROR:" + error)
  //     setLoading(false)
  //   }
  // }

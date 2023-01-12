import Search from '../Components/SearchForm'
import CocktailList from '../Components/CocktailList'


const Home = () => {
  return(
    <div className= 'main'>
      <Search />
      <CocktailList />
    </div>
  )
}

export default Home;
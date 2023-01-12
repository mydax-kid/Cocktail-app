import {useGlobal} from '../App'

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobal();

  const handleInput = (e) => {
    e.preventDefault()
    setSearchTerm(e.target.value);
  }
  
  return(
    <div className= 'form'>
      <form>
      <label>Search for your favorite cocktail</label>
      <div>
        <input type= 'text' placeholder= 'search..' onChange = {handleInput} value= {searchTerm} />
      </div>
      </form>
    </div>
  )
}

export default SearchForm
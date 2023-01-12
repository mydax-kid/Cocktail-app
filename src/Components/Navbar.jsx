import {useGlobal} from '../App.jsx'
import { Link } from 'react-router-dom';


const Navbar = () => {
  
  return(
    <div className="nav">
      <div className= 'nav-container'>
        <Link to= '/'>
          <div className= 'logo'>COCKTAILS</div>
        </Link>
        
        <ul className= 'nav-links'>
          <Link to='/'>
            <li>HOME</li>
          </Link>
          <Link to='/about'>
            <li>ABOUT</li>
          </Link>
        </ul>
        
      </div>
    </div>
  )
}

export default Navbar;
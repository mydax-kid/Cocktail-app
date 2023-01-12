import {Link} from 'react-router-dom'


const Error = () => {
  return(
    <div className="section">
      <h2>Oops, so much empty ☻</h2>
      <Link to='/' className= 'link'>Go Back</Link>
    </div>
  )
}

export default Error;
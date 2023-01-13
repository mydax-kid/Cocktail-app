import {Link} from 'react-router-dom'


const Error = () => {
  return(
    <div className="section-error">
      <h2>Oops, no such page exists :(</h2>
      <Link to='/' className= 'btn'>Go Back</Link>
    </div>
  )
}

export default Error;
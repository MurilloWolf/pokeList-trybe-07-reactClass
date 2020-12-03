import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'
class Details extends React.Component {

  render(){
    return(
      <header className={'header'}>
        <Link to={'/'}>
          Home
        </Link>
      </header>
      
    )
  }
}
export default Details
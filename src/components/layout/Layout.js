import React from 'react'
import Header from '../header'

class Layout extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    const { header } = this.props
    return(
      <div>
        { header && <Header /> }
        {
          this.props.children
        }
      </div>
    )
  }
}

export default Layout;
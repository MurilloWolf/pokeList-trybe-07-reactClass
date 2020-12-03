import React from 'react'

class PageChange extends React.Component{
  constructor(props){
    super(props)
/*     this.handleChange = this.handleChange.bind(this)
 */  }

  handleChange(){
    const {pageNumber} = this.props;
    console.log(pageNumber)
  }

  render(){
    return(
      <p onClick={this.handleChange}>{this.props.pageNumber}</p>
    )
  }
}
export default PageChange
import React from 'react'
import Layout from '../components/layout/Layout'
class Details extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      types: {}
    }
  }

  async fetchPokemons(){
    const endpoint = this.props.location.state.url
    const {types} =  await fetch(endpoint).then(res => res.json() )
    this.setState(()=>({ types }),()=> console.log(this.state))
  }

  componentDidMount(){
    this.fetchPokemons()
  }

  render(){
    return(
      <Layout header={true}>   
        <h1>Details</h1>
       
      </Layout>
    )
  }
}
export default Details
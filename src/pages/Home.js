import React from 'react'
import {Link } from 'react-router-dom'
import List from '../components/list/List'
class Home extends React.Component {
  constructor(){
    super()
    this.state ={
      pokemonList: []
    }
    this.fetchPokemons = this.fetchPokemons.bind(this)
  }

  async fetchPokemons(){
    const endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=151'
    const {results} =  await fetch(endpoint).then(res => res.json() )
    this.setState(()=>({ pokemonList:results }))
  }

  componentDidMount(){
    this.fetchPokemons()
  }
 

  render(){

    const {pokemonList} = this.state;

    return(
      <div>
        <ul>
          <List pokemonList ={pokemonList} />
        </ul>
      </div>
    )
  }
}
export default Home
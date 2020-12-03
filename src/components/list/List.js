import React from 'react'
import Header from '../header'
import { Link } from 'react-router-dom'
import PageChange from './pageChange/PageChange'
class List extends React.Component{
  constructor(props){
    super(props);
    this.listPokemons = this.listPokemons.bind(this)
    this.getTotalPages = this.getTotalPages.bind(this)
  //  this.renderPageList = this.renderPageList.bind(this)
    this.state = {
      pokemonList: this.props.pokemonList,
      listedPokemons: [],
      pages: 0,
    }
  }

  componentDidMount(){

    this.listPokemons()
    const maxPages = this.getTotalPages()
    this.setState({pages:maxPages })
  }

  getTotalPages(){
    const {pokemonList} = this.state;
    const maxPokemonsPerPage = 10
    return Math.ceil(pokemonList.length / maxPokemonsPerPage) 
  }

  listPokemons(){
    const {pokemonList} = this.state;
    const listed = pokemonList.reduce((acc, currentPokemon)=>{
      const length = acc.length;
      const listLimit = 10
      length < listLimit && acc.push(currentPokemon)
      return acc
    }, [])

    this.setState({listedPokemons:listed})
  }

   renderPageList(){
    const {pages} = this.state
    const elementsList = []
    for(let i = 0; i< pages ; i++){
      console.log('passou')
     elementsList.push(<PageChange key={i} pageNumber={i}/>)
    }
    return elementsList
  } 

  render(){
    const {listedPokemons} = this.state
    return(
      <div>
        {
          listedPokemons.map(item=> <li key={item.name}>{item.name}</li>)
        }
        <div className={'pages'}>
         {
            this.renderPageList()
         }
        </div>
      </div>
     
    )
  }
}

export default List;
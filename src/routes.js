import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Home , Details} from './pages'

class Routes extends React.Component {

  render(){
    return(
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/pokemonDetails" component={Details} />
          </Switch>
        </Router>
    )
  }
}
export default Routes;
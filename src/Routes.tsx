import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './views/Home'
import About from './views/About'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    )
  }
}

export default Routes

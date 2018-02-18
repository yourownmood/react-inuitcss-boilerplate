import * as React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './views/Home'
import About from './views/About'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul className='o-list-inline'>
            <li className='o-list-inline__item'><Link to='/'>Home</Link></li>
            <li className='o-list-inline__item'><Link to='/about'>About</Link></li>
          </ul>
          <Route exact={true} path='/' component={Home} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    )
  }
}

export default App

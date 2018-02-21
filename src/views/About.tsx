import * as React from 'react'
import { Link } from 'react-router-dom'

class About extends React.PureComponent {
  render() {
    const logo = require('../assets/logo.svg')

    return (
      <div className='About'>
        <ul className='o-list-inline'>
          <li className='o-list-inline__item'><Link to='/'>Home</Link></li>
          <li className='o-list-inline__item'><Link to='/about'>About</Link></li>
        </ul>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>ABOUT</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default About

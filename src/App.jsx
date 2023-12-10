import React, { Component } from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/Nav.jsx/Nav'
import './style.css'
import Profile from './Components/MainContent/Profile'

export class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header/>
        <Nav/>
        <Profile/>
      </div>
    )
  }
}

export default App
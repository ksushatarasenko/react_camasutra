import React, { Component } from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/Nav.jsx/Nav'
import './style.css'
import Profile from './Components/MainContent/Profile'
import Dialogs from './Components/Dialogs/Dialogs'
import { BrowserRouter as Router,
          Routes, Route} from 'react-router-dom'    

export class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Router>
          <Nav/>
          <Routes>
            <Route patch=''/>
          </Routes>
        </Router>
        <Header/>
        
        <div>
          <Profile/>
          <Dialogs/>
        </div>
        
      </div>
    )
  }
}

export default App
// import React, { Component } from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/Nav.jsx/Nav'
import './style.css'
import Profile from './Components/MainContent/Profile'
import Dialogs from './Components/Dialogs/Dialogs'
import News from './Components/News/News'
import Music from './Components/Music/Music'
import { Routes, Route, HashRouter} from 'react-router-dom'    
import DialogsContiner from './Components/Dialogs/DialogsContiner'
import UsersContiner from './Components/users/UsersContiner'

function App(props) {
  
    return (
      <div className='wrapper'>
        <HashRouter>
          <Header/>
          <Nav/>
            <Routes>
              <Route path='/' element={<Profile/>}/>
              <Route path='/dialogs/*' element={<DialogsContiner/>}/>
              <Route path='/users/' element={<UsersContiner/>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/music' element={<Music/>}/>
              <Route path='/settings' element={<Dialogs/>}/>
            </Routes>                  
        </HashRouter>
        
      </div>
    )
  
}

export default App
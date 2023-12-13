// import React, { Component } from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/Nav.jsx/Nav'
import './style.css'
import Profile from './Components/MainContent/Profile'
import Dialogs from './Components/Dialogs/Dialogs'
import News from './Components/News/News'
import Music from './Components/Music/Music'
import { BrowserRouter,Routes, Route} from 'react-router-dom'    

function App(props) {
  
    return (
      <div className='wrapper'>
        <BrowserRouter>
          <Header/>
          <Nav/>
            <Routes>
              <Route path='/' element={<Profile postData={props.state.profilePage.postData}/>}/>
              <Route path='/dialogs/*' element={<Dialogs dialogsItem={props.state.dialogsPage.dialogsItem} messageData={props.state.dialogsPage.messageData}/>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/music' element={<Music/>}/>
              <Route path='/settings' element={<Dialogs/>}/>
            </Routes>                  
        </BrowserRouter>
        
      </div>
    )
  
}

export default App
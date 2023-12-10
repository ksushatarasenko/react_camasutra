import React from 'react'
import logo from './image/logo.png'
import head from './header.module.css'

function Header() {
  return (
    <div className='header'>
      <div className={head.wrapper}>
        <div className={head.image}>
          <img src={logo} alt="logo" />
        </div>
        
      </div>
        
        
    </div>
  )
}

export default Header;
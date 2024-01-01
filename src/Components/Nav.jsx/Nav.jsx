import React from 'react'
import nav from './nav.module.css'
import '../../style.css'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        <div className={nav.wrapper }>
          <div className={nav.item}>
            <NavLink to='/' className={({isActive})=> isActive ? 'active' : ''}>Profile</NavLink>
            <NavLink  to='/dialogs' activeClassName={nav.active}>Message</NavLink>
            <NavLink  to='/users' activeClassName={nav.active}>Users</NavLink>
            <NavLink to='/news' activeClassName={nav.active}>News</NavLink>
            <NavLink to='/music' activeClassName={nav.navLinkActive}>Music</NavLink>
            <NavLink to='/settings' className={nav.active}>Settings</NavLink>
          </div>
        </div>  
    </div>
  )
}

export default Nav
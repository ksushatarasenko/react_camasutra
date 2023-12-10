import React from 'react'
import nav from './nav.module.css'

function Nav() {
  return (
    <div className='nav'>
        <div className={nav.wrapper}>
            <div className={nav.item}><a href="#">Profile</a></div>
            <div className={nav.item}><a href="#">Message</a></div>
            <div className={nav.item}><a href="#">News</a></div>
            <div className={nav.item}><a href="#">Music</a></div>
            <div className={nav.item}><a href="#">Settings</a></div>
        </div>
    </div>
  )
}

export default Nav
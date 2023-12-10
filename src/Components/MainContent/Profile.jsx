import React from 'react'
import fon from './image/Blue Modern Technology LinkedIn Banner.png'
import profile from './profile.module.css'

function Profile() {
  return (
    <div className='content' >
      <div className={profile.wrapper}>
        <div className={profile.header_img}><img src={fon} alt="fon"/></div>
        
      </div>
        
    </div>
  )
}

export default Profile;
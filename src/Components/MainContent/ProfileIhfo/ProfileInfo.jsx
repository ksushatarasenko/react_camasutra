import React from 'react'
import fon from '../image/Blue Modern Technology LinkedIn Banner.png'
import profile from '../profile.module.css'


function ProfileInfo() {
  return (
    <div>
        <div className={profile.header_img}><img src={fon} alt="fon"/></div>
        <div className={profile.discription}>add + discription</div>
    </div>
  )
}

export default ProfileInfo
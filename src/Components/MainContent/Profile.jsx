import React from 'react'
import fon from './image/Blue Modern Technology LinkedIn Banner.png'
import profile from './profile.module.css'
import MyPosts from './MyPosts/MyPosts';

function Profile() {
  return (
    <div className='content' >
      <div className={profile.wrapper}>
        <div className={profile.header_img}><img src={fon} alt="fon"/></div>
        <div>add + discription</div>
          <MyPosts/>
      </div>
        
    </div>
  )
}

export default Profile;
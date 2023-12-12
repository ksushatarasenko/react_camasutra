import React from 'react'
import profile from './profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileIhfo/ProfileInfo';

function Profile() {
  return (
    <div className='content' >
      <div className={profile.wrapper}>
          <ProfileInfo/>
          <MyPosts/>
      </div>
        
    </div>
  )
}

export default Profile;
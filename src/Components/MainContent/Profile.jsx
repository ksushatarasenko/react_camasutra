import React from 'react'
import profile from './profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileIhfo/ProfileInfo';

function Profile(props) {
  return (
    <div className='content' >
      <div className={profile.wrapper}>
          <ProfileInfo/>
          <MyPosts postData={props.postData}/>
      </div>
        
    </div>
  )
}

export default Profile;
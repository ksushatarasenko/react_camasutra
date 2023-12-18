import React from 'react'
import profile from './profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileIhfo/ProfileInfo';


function Profile(props) {

  return (
    <div className='content' >
      <div className={profile.wrapper}>
          <ProfileInfo/>
          <MyPosts 
              profilePage={props.profilePage} 
              dispatch={props.dispatch} />
      </div>
        
    </div>
  )
}

export default Profile;
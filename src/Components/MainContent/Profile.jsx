import React from 'react'
import profile from './profile.module.css'
// import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileIhfo/ProfileInfo';
import MyPostsContiner from './MyPosts/MyPostsContiner';


function Profile(props) {
  console.log(props);

  return (
    <div className='content' >
      <div className={profile.wrapper}>
          <ProfileInfo/>
          <MyPostsContiner 
            store={props.store}
            />
      </div>
        
    </div>
  )
}

export default Profile;
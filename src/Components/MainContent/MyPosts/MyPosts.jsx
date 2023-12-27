import React from 'react'
import posts from './myPosts.module.css'
import Post from './Post/Post'


function MyPosts(props) {
 
  return (
    <div className={posts.wrapper}>
        {props.postData.map(item=>(
          <Post 
            message={item.message} 
            id={item.id} 
            countLike={item.countLike}/>
        ))}   
    </div>
  )
}

export default MyPosts
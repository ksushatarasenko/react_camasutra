import React from 'react'
import posts from './myPosts.module.css'
import Post from './Post/Post'
import AddPost from '../AddPost/AddPost'

function MyPosts(props) {

  
  return (
    <div className={posts.wrapper}>
        <AddPost addPost={props.addPost}/>
        {props.postData.map(item=>(
          <Post 
            message={item.message} id={item.id} countLike={item.countLike}/>
        ))}   
    </div>
  )
}

export default MyPosts
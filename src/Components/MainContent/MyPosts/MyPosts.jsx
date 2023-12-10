import React from 'react'
import posts from './myPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
  return (
    <div className={posts.wrapper}>
        My posts
        <div>
            <textarea name="" id="" cols="30" rows="5"></textarea>
            <button>Add Post</button>
            <button>Remove</button>
        </div>
        <div>
            New post
        </div>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>        
    </div>
  )
}

export default MyPosts
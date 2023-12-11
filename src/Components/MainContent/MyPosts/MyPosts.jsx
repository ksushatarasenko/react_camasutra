import React from 'react'
import posts from './myPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
  return (
    <div className={posts.wrapper}>
        My posts
        <div>
            <textarea name="" id="" cols="30" rows="3"></textarea>
            <button>Add Post</button>
            <button>Remove</button>
        </div>
        <div>
            New post
        </div>
        <Post message='Hi, how are you?' countLike='27'/>
        <Post message='All, ok, and you?' countLike='7'/>
        <Post message='What do you like?' countLike='11'/>
        <Post message='I like, sleep' countLike='20'/>
        <Post message='Bye...' countLike='15'/>        
    </div>
  )
}

export default MyPosts
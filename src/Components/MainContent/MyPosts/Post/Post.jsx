import React from 'react'
import avatar from './image/avatar.jpg'
import post from './post.module.css'

function Post() {
  return (
    <div className={post.wrapper}>
        <div className={post.image}>
            <img src={avatar} alt="" />
        </div>
        <div className={post.post}>
             Post
        </div> 
        <div>
            <button>like</button>
        </div>    
    </div>
  )
}

export default Post
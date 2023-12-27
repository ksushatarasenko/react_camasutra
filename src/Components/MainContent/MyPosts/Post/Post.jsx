import React from 'react'
import avatar from './image/avatar.jpg'
import post from './post.module.css'

function Post(props) {
  // console.log(props);
  return (
    <div className={post.wrapper}>
        <div className={post.image}>
            <img src={avatar} alt="" />
             <p>like - {props.countLike}</p>
        </div>
        <div className={post.post}>
             {props.message}
        </div> 
           
    </div>
  )
}

export default Post
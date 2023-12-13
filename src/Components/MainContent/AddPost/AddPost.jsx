import posts from '../profile.module.css'
import React from 'react'

function AddPost() {
  return (
    <div>
        <h3>My posts</h3>
        <div className={posts.postBlock}>
          <div>
            <textarea name="" id="" cols="30" rows="3"></textarea>
          </div>           
            <button>Add Post</button>
            <button>Remove</button>
        </div>
       
    </div>
  )
}

export default AddPost
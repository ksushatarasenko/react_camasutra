import posts from '../profile.module.css'
import React from 'react'



function AddPost(props) {
  // console.log(props)

  const onAddPost = () => {
    props.addPost()
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text)
   
  }

  return (
    <div>
      <h3>Add new posts</h3>
      <div className={posts.postBlock}>
        <div>
          <textarea
            cols="30" 
            rows="3"
            value={props.newPostText}
            onChange={onPostChange}></textarea>
        </div>
        <button onClick={onAddPost}>Add Post</button>
      </div>

    </div>
  )
}

export default AddPost
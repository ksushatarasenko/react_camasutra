import posts from '../profile.module.css'
import React from 'react'

function AddPost(props) {
  let textAddPost = React.createRef();

  const addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = textAddPost.current.value;
    props.updateNewPostText(text);
    
  }

  return (
    <div>
        <h3>Add new posts</h3>
        <div className={posts.postBlock}>
          <div>
            <textarea name="" id="" cols="30" rows="3" 
              ref={textAddPost} 
              value={props.newPostText}
              onChange={onPostChange}></textarea>
          </div>           
            <button onClick={addPost}>Add Post</button>
        </div>
       
    </div>
  )
}

export default AddPost
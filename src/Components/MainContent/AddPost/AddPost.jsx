import posts from '../profile.module.css'
import React from 'react'

function AddPost(props) {
  let textAddPost = React.createRef();

  const addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  }

  let onPostChange = () => {
    let text = textAddPost.current.value;
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });

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
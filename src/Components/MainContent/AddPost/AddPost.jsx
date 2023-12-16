import posts from '../profile.module.css'
import React from 'react'

function AddPost(props) {
  let textAddPost = React.createRef();

  const addPost = () => {
    let text = textAddPost.current.value;
    console.log(text)
    props.addPost(text);
    textAddPost.current.value = '';
  }

  return (
    <div>
        <h3>Add new posts</h3>
        <div className={posts.postBlock}>
          <div>
            <textarea name="" id="" cols="30" rows="3" ref={textAddPost}></textarea>
          </div>           
            <button onClick={addPost}>Add Post</button>
        </div>
       
    </div>
  )
}

export default AddPost
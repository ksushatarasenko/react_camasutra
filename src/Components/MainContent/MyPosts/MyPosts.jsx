import React from 'react'
import posts from './myPosts.module.css'
import Post from './Post/Post'


function MyPosts(props) {
  console.log('Myposts:', props)
 
  const onAddPost = () => {
    
    props.addPost()
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text)
   console.log('Text',text)
  }

  return (
    <div className={posts.wrapper}>
      <div>
        {props.postData.map(item=>(
            <Post 
              message={item.message} 
              id={item.id} 
              countLike={item.countLike}/>
          ))} 
      </div>
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
          
    </div>
  )
}

export default MyPosts
import React from 'react'
import posts from './myPosts.module.css'
import AddPost from '../AddPost/AddPost'
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';



function MyPostsContiner(props) {
// console.log(props.store.getState().profilePage)
  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
}

let onPostChange = (text) => {
  let action = updateNewPostActionCreator(text)
  props.store.dispatch(action);

}
  
  return (
    <div className={posts.wrapper}>
        <AddPost 
          updateNewPostText={onPostChange} 
          addPost={addPost} 
          newPostText={props.store.getState().profilePage.newPostText}
            />
       
          <MyPosts
           postData={props.store.getState().profilePage.postData}/>
      
    </div>
  )
}

export default MyPostsContiner
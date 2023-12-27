import React from 'react'
import posts from './myPosts.module.css'
import AddPost from '../AddPost/AddPost'
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



// function MyPostsContiner(props) {
// // console.log(props.store.getState().profilePage)
//   const addPost = () => {
//     props.store.dispatch(addPostActionCreator());
// }

// let onPostChange = (text) => {
//   let action = updateNewPostActionCreator(text)
//   props.store.dispatch(action);

// }
  
//   return (
//     <div className={posts.wrapper}>
//         <AddPost 
//           updateNewPostText={onPostChange} 
//           addPost={addPost} 
//           newPostText={props.store.getState().profilePage.newPostText}
//             />
       
//           <MyPosts
//            postData={props.store.getState().profilePage.postData}/>
      
//     </div>
//   )
// }

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText:(text) => {
      let action = updateNewPostActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      addPostActionCreator()
    }
  }
} 

const MyPostsContiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContiner
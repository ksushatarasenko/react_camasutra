const addPost = 'ADD-POST';
const updateNewPost = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
   console.log(state, action)
    if (action.type === addPost) {
        let newPost = {
          id: 5,
          message: state.newPostText,
          countLike: 0,
        }
        state.postData.push(newPost);
        state.newPostText = '';
      } else if (action.type === updateNewPost) {
        state.newPostText = action.newText;  
      }
     
    return state;
    
}

export default profileReducer;
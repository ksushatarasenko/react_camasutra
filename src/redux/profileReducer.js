const addPost = 'ADD-POST';
const updateNewPost = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
  switch(action.type){
    case addPost:
      let newPost = {
        id: 5,
        message: state.newPostText,
        countLike: 0,
      }
      state.postData.push(newPost);
      state.newPostText = '';
      return state;
    case updateNewPost:
      state.newPostText = action.newText;
      return state;
    default: return state;
  }
    
}

export default profileReducer;
const addPost = 'ADD-POST';
const updateNewPost = 'UPDATE-NEW-POST-TEXT';

let initionalState = {
  postData: [
    { id: 1, message: 'Hi, how are you?', countLike: 21 },
    { id: 2, message: 'All, ok, and you?', countLike: 17 },
    { id: 3, message: 'I like, sleep', countLike: 15 },
    { id: 4, message: 'Nice to meet you,too', countLike: 9 },
    { id: 5, message: 'I want a pizza', countLike: 20 },
    { id: 6, message: 'Bye...', countLike: 7 },

  ],
  newPostText: ' ',
}

const profileReducer = (state = initionalState, action) => {
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

export const addPostActionCreator = () => ({type:addPost});
export const updateNewPostActionCreator = (text) => ({type: updateNewPost, newText: text});
export default profileReducer;
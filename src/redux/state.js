import dialogsReducer from './dialogReducer';
import profileReducer from "./profileReducer";

const addPost = 'ADD-POST';
const updateNewPost = 'UPDATE-NEW-POST-TEXT';
const sendMessage = 'SEND-MESSAGE';
const updateNewMessage = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: 'Hi, how are you?', countLike: 21 },
        { id: 2, message: 'All, ok, and you?', countLike: 17 },
        { id: 3, message: 'I like, sleep', countLike: 15 },
        { id: 4, message: 'Nice to meet you,too', countLike: 9 },
        { id: 5, message: 'I want a pizza', countLike: 20 },
        { id: 6, message: 'Bye...', countLike: 7 },

      ],
      newPostText: ' ',
    },
    dialogsPage: {
      dialogsItem: [
        { id: 1, name: 'Petr' },
        { id: 2, name: 'Oksana' },
        { id: 3, name: 'Roman' },
        { id: 4, name: 'Kyrylo' },
        { id: 5, name: 'Maryna' },
        { id: 6, name: 'Katya' },
        { id: 7, name: 'Vera' },

      ],

      messageData: [
        { id: 1, text: 'Hello!!' },
        { id: 2, text: 'Hi, are you?' },
        { id: 3, text: 'Perfect' },
        { id: 4, text: 'What, are you do?' },
        { id: 5, text: 'Clear and listern music, and you?' },
        { id: 6, text: 'I sitt and talk you.' },
        { id: 7, text: 'Goodbye...' },
      ],
      newMessageBody: '',
    },
    sidebar:{}
  },
  _callSubscriber() {
    console.log("State changed")
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }

}

export const addPostActionCreator = () => ({type:addPost});
export const updateNewPostActionCreator = (text) => ({type: updateNewPost, newText: text});

export const addMessageActionCreator = () => ({type:sendMessage});
export const updateNewMessageActionCreator = (body) => ({type:updateNewMessage, body:body})

export default store;
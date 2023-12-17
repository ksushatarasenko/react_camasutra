// import { rerenderEntireTree } from "../render";

let rerenderEntireTree = () => {

 }
let state = {
  profilePage:{
    postData:[
      {id:1, message:'Hi, how are you?', countLike:21},
      {id:2, message:'All, ok, and you?', countLike:17},
      {id:3, message:'I like, sleep', countLike:15},
      {id:4, message:'Nice to meet you,too', countLike:9},
      {id:5, message:'I want a pizza', countLike:20},
      {id:6, message:'Bye...', countLike:7},
    
    ],
    newPostText: ' ',
  },
  dialogsPage:{
    dialogsItem:[
      {id:1, name:'Petr'},
      {id:2, name:'Oksana'},
      {id:3, name:'Roman'},
      {id:4, name:'Kyrylo'},
      {id:5, name:'Maryna'},
      {id:6, name:'Katya'},
      {id:7, name:'Vera'},
    
    ] ,
    
    messageData:[
      {id:1, text:'Hello!!'},
      {id:2, text:'Hi, are you?'},
      {id:3, text:'Perfect'},
      {id:4, text:'What, are you do?'},
      {id:5, text:'Clear and listern music, and you?'},
      {id:6, text:'I sitt and talk you.'},
      {id:7, text:'Goodbye...'},
    ],
    newMessageText:'',
  }, 
}
   
window.state = state;

export let addPost = () => {
  let newPost ={
    id:5,
    message: state.profilePage.newPostText,
    countLike: 0,
  }
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let addMessage = () => {
  let newMessage ={
    id:8,
    text: '',
  }
  state.dialogsPage.messageData.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}
export let updateNewMessageText = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;
// import { rerenderEntireTree } from "../render";

let store = {
  _state:{
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
    
  },
  getState(){
    return this._state;
  },
  _callSubscriber () {
    console.log("sState changed")
  },
  addPost(){
    let newPost ={
      id:5,
      message: this._state.profilePage.newPostText,
      countLike: 0,
    }
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber (this._state);
  },
  addMessage(){
    let newMessage ={
      id:8,
      text: '',
    }
    this._state.dialogsPage.messageData.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber (this._state);
  },
  
  updateNewPostText(newText){
    this._state.profilePage.newPostText = newText;
    this._callSubscriber (this._state);
  },
  updateNewMessageText(newMessage){
    this._state.dialogsPage.newMessageText = newMessage;
    this._callSubscriber (this._state);
  },
  
  subscribe(observer){
    this._callSubscriber  = observer;
  },

}




export default store;
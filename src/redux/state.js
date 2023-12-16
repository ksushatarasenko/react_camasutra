import { rerenderEntireTree } from "../render";

let state = {
  profilePage:{
    postData:[
      {id:1, message:'Hi, how are you?', countLike:21},
      {id:2, message:'All, ok, and you?', countLike:17},
      {id:3, message:'I like, sleep', countLike:15},
      {id:4, message:'Nice to meet you,too', countLike:9},
      {id:5, message:'I want a pizza', countLike:20},
      {id:6, message:'Bye...', countLike:7},
    
    ]
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
      {id:1, text:'Hi, are you?'},
      {id:1, text:'Perfect'},
      {id:1, text:'What, are you do?'},
      {id:1, text:'Clear and listern music, and you?'},
      {id:1, text:'I sitt and talk you.'},
      {id:1, text:'Goodbye...'},
    ],
  }, 
}
    
export let addPost = (postMessage) => {
  let newPost ={
    id:5,
    message: postMessage,
    countLike: 0,
  }

  state.profilePage.postData.push(newPost);
  rerenderEntireTree(state);
}

export default state;
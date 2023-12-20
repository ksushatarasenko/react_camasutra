const sendMessage = 'SEND-MESSAGE';
const updateNewMessage = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
     if (action.type === sendMessage) {
        let body = state.newMessageBody; 
        state.newMessageBody = '';  
        state.messageData.push({id:6, text:body});
      } else if (action.type === updateNewMessage) {
        state.newMessageBody = action.body;
      }
    return state;
}

export default dialogsReducer;
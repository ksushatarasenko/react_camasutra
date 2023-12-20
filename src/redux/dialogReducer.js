const sendMessage = 'SEND-MESSAGE';
const updateNewMessage = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch(action.type){
        case sendMessage: 
            let body = state.newMessageBody; 
            state.newMessageBody = '';  
            state.messageData.push({id:6, text:body});
            return state;
        case updateNewMessage:
            state.newMessageBody = action.body;
            return state;
        default: return state;
            
    }
}

export default dialogsReducer;
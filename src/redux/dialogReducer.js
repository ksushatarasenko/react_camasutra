const sendMessage = 'SEND-MESSAGE';
const updateNewMessage = 'UPDATE-NEW-MESSAGE-TEXT';

let initionalState = {

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
}

const dialogsReducer = (state = initionalState, action) => {
    switch(action.type){
        case sendMessage: 
            let stateCopy = {...state};
            let body = state.newMessageBody; 
            stateCopy.newMessageBody = '';  
            stateCopy.messageData.push({id:6, text:body});
            return stateCopy;
        case updateNewMessage:
            return {
                ...state,
                newMessageBody: action.body,
            };
            // stateCopy.newMessageBody = action.body;
            // return stateCopy;
        default: return state;
            
    }
}

export const addMessageActionCreator = () => ({type:sendMessage});
export const updateNewMessageActionCreator = (body) => ({type:updateNewMessage, body:body})

export default dialogsReducer;
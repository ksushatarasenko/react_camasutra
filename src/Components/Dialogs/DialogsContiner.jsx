import React from 'react'
import dialog from './dialogs.module.css'
import Dialogs from './Dialogs'
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogReducer';
import AddMessage from './AddMessage';

function DialogsContiner(props) {
  
  let state = props.store.getState().dialogsPage
  // console.log(state)

  const onSendMessage = (body) => {
    props.store.dispatch(addMessageActionCreator(body));
  }

  let onNewMessage = (body) => {
     props.store.dispatch(updateNewMessageActionCreator(body));
  }
   
  return (
    <div className={dialog.wrapper}>
        <Dialogs 
          state={state} 
          />
        <AddMessage
          newMessageBody = {state.newMessageBody}
          onSendMessage={onSendMessage} 
          onNewMessage={onNewMessage}
        />
    </div>
  )
}

export default DialogsContiner
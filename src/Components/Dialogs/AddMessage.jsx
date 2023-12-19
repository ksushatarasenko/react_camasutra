import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/state';
import dialog from './dialogs.module.css'
import React from 'react'



function AddMessage(props) {
  let newMessageBody = props.newMessageText;
console.log(props)

  const onSendMessageClick = (text) => {
    props.dispatch(addMessageActionCreator());
  }

  let onNewMessageChange = (event) => {
    let text = event.target.value;
    console.log(text)
    props.dispatch(updateNewMessageActionCreator(text));
  }

  return (
    <div>
        <h3>Add new message</h3>
        <div className={dialog.postBlock}>
          <div>
            <textarea 
              // ref={textAddMessage} 
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder='Enter your message'></textarea>
          </div> 
          <div>
            <button onClick={onSendMessageClick}>Send Message</button>
          </div>          
          
        </div>
       
    </div>
  )
}

export default AddMessage;
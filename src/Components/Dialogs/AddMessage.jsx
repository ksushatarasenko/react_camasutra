import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogReducer';
import dialog from './dialogs.module.css'
import React from 'react'



function AddMessage(props) {
    
console.log(props.newMessageBody)
  let newMessageBody = props.newMessageBody; 
console.log(newMessageBody)

  const onSendMessageClick = () => {
    let body = props.newMessageBody;
    props.dispatch(addMessageActionCreator(body));
  }

  let onNewMessageChange = (e) => {
    
    let body = e.target.value;
   
    props.dispatch(updateNewMessageActionCreator(body));
    console.log(body)
  }

  return (
    <div>
        <h3>Add new message</h3>
        <div className={dialog.postBlock}>
          <div>
            <textarea              
              value={props.newMessageBody}
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
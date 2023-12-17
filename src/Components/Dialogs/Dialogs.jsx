import React from 'react'
import dialog from './dialogs.module.css'
import DialogItems from './DialogItems'
import Message from './Message'
// import AddPost from '../MainContent/AddPost/AddPost'
import AddMessage from './AddMessage'

function Dialogs(props) {
  
  return (
    <div className={dialog.wrapper}>
      
        <AddMessage className={dialog.addPost}
            newMessageText={props.newMessageText}
            updateNewMessageText={props.updateNewMessageText}
            addMessage={props.addMessage}/>
        <div className={dialog.page}>
          <div className={dialog.item}>
            {props.dialogsItem.map(item => (
              <DialogItems name={item.name} id={item.id}/>
            ))}
            
          </div>
          <div className={dialog.message}>
          {props.messageData.map(message => (
            <Message text={message.text} id={message.id}/>
          ))
          }
          </div>
        </div>
        
    </div>
  )
}

export default Dialogs
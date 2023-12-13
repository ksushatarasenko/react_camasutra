import React from 'react'
import dialog from './dialogs.module.css'
import DialogItems from './DialogItems'
import Message from './Message'

function Dialogs(props) {
  
  return (
    <div className={dialog.wrapper}>
        <div>
          {props.dialogsItem.map(item => (
            <DialogItems name={item.name} id={item.id}/>
          ))}
          
        </div>
        <div>
         {props.messageData.map(message => (
          <Message text={message.text} id={message.id}/>
         ))
         }
        </div>
    </div>
  )
}

export default Dialogs
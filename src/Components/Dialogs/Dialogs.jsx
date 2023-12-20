import React from 'react'
import dialog from './dialogs.module.css'
import DialogItems from './DialogItems'
import Message from './Message'
import AddMessage from './AddMessage'

function Dialogs(props) {
  let dialogElements = props.dialogsItem.map(d => <DialogItems name={d.name} id={d.id}/>)
  let messageElements = props.messageData.map(message => (<Message text={message.text} id={message.id}/>))
  
  return (
    <div className={dialog.wrapper}>
        <div className={dialog.page}>
          <div className={dialog.item}>
            {dialogElements}          
          </div>
          <div className={dialog.message}>
            {messageElements}
          </div>
        </div>
        <AddMessage className={dialog.addPost}
            newMessageBody={props.newMessageBody}
            dispatch={props.dispatch}/>
    </div>
  )
}

export default Dialogs
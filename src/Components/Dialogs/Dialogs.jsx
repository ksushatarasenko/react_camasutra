import React from 'react'
import dialog from './dialogs.module.css'
import DialogItems from './DialogItems'
import Message from './Message'

function Dialogs(props) {
  console.log(props)
  let dialogElements = props.state.dialogsItem.map(d => <DialogItems name={d.name} id={d.id}/>)
  let messageElements = props.state.messageData.map(message => (<Message text={message.text} id={message.id}/>))
  
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
    </div>
  )
}

export default Dialogs
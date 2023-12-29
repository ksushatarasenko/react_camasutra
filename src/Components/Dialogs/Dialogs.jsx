import React from 'react'
import dialog from './dialogs.module.css'
import DialogItems from './DialogItems'
import Message from './Message'
import AddMessage from './AddMessage'

function Dialogs(props) {
  console.log('Dialogs:',props)
  let dialogElements = props.dialogsPage.dialogsItem.map(d => <DialogItems name={d.name} id={d.id}/>)
  let messageElements = props.dialogsPage.messageData.map(message => (<Message text={message.text} id={message.id}/>))

  const onSendMessageClick = () => {
    let body = props.dialogsPage.newMessageBody;
    props.onSendMessage(body)
    
  }


  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.onNewMessage(body)
  }

  
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

        <div className={dialog.addPost}>
        <h3>Add new message</h3>
        <div className={dialog.postBlock}>
          <div>
            <textarea              
              value={props.dialogsPage.newMessageBody}
              onChange={onNewMessageChange}
              placeholder='Enter your message'></textarea>
          </div> 
          <div>
            <button onClick={onSendMessageClick}>Send Message</button>
          </div>          
          
        </div>
       
    </div>
    </div>
  )
}

export default Dialogs
import dialog from './dialogs.module.css'
import React from 'react'

function AddMessage(props) {
  let textAddMessage = React.createRef();

  const addMessag = () => {
    props.addMessag();
  }

  let onPostChange = () => {
    let text = textAddMessage.current.value;
    console.log(text)
    props.updateNewMessageText(text);
  }

  return (
    <div>
        <h3>Add new message</h3>
        <div className={dialog.postBlock}>
          <div>
            <textarea name="" id="" cols="30" rows="3" 
              ref={textAddMessage} 
              value={props.newMessageText}
              onChange={onPostChange}></textarea>
          </div>           
            <button onClick={addMessag}>Add Message</button>
        </div>
       
    </div>
  )
}

export default AddMessage;
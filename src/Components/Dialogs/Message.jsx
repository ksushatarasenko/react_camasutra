import React from 'react'
import dialog from './dialogs.module.css'

function Message(props) {
  return (
    <div>
        <div className={dialog.message}>{props.text}</div>
    </div>
  )
}

export default Message
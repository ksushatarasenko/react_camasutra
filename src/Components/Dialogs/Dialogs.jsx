import React from 'react'
import dialog from './dialogs.module.css'
import DialogItems from './DialogItems'
import Message from './Message'

function Dialogs() {
  return (
    <div className={dialog.wrapper}>
        <div><DialogItems/></div>
        <div><Message/></div>
    </div>
  )
}

export default Dialogs
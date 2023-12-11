import React from 'react'
import dialog from './dialogs.module.css'

function DialogItems() {
  return (
    <div>
        <div className={dialog.item}>Petr</div>
        <div className={dialog.item}>Oksana</div>
        <div className={dialog.item}>Maryna</div>
        <div className={dialog.item}>Kyrylo</div>
        <div className={dialog.item}>Katya</div>
    </div>
  )
}

export default DialogItems
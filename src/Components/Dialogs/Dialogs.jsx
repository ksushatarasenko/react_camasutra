import React from 'react'
import dialog from './dialogs.module.css'
import DialogItems from './DialogItems'
import Message from './Message'

function Dialogs() {
  return (
    <div className={dialog.wrapper}>
        <div>
          <DialogItems name='Petr' id='1'/>
          <DialogItems name='Oksana' id='2'/>
          <DialogItems name='Maryna' id='3'/>
          <DialogItems name='Kyrylo' id='4'/>
          <DialogItems name='Vanya' id='5'/>
          <DialogItems name='Katya' id='6'/>
        </div>
        <div>
          <Message text='Hello!!'/>
          <Message text='Hi, are you?'/>
          <Message text="I'm good, and you?"/>
          <Message text='Perfect'/>
          <Message text='What, are you do?'/>
          <Message text='Clear and listern music, and you?'/>
          <Message text='I sitt and talk you.'/>
        </div>
    </div>
  )
}

export default Dialogs
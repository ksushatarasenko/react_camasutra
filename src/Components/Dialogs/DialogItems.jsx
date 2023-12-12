import React from 'react'
import dialog from './dialogs.module.css'
import { NavLink } from 'react-router-dom'

function DialogItems(props) {
  let path = `/dialogs/${props.id}`
  return (
    <div>
        <div className={dialog.item}><NavLink to={path} activeClassName={dialog.active}>{props.name}</NavLink></div>
    </div>
  )
}

export default DialogItems
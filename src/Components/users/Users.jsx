import React from 'react'
import user from './users.module.css'
import axios from 'axios'
import userImg from '../../images/1636565361_2-sobakovod-club-p-sobaki-doberman-dlya-avatarki-3.jpg'

function Users(props) {
    console.log(props)
    if(props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }

  return (
    <div className={user.wrapper}>
        {
            props.users.map(u => <div key={u.id} className={user.continer}>
                <span>
                    <div><img src={u.photos.small != null ? u.photos.small : userImg} alt="" /></div>
                    <div><button>Follow</button></div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
  )
}

export default Users
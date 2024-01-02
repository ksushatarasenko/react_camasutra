import React from 'react'
import user from './users.module.css'

function Users(props) {
    console.log(props)
    // if(props.users.length === 0){
    //     props.setUsers(
    //         [
    //             { id: 1, photoUrl:'', fololowed: false, name:"Petr", status: 'I am a boss', location: {city: 'Oster', country: 'Ukraine'}},
    //             { id: 2, photoUrl:'', fololowed: true,name:"Oksana", status: 'I am a boss', location: {city: 'Oksana', country: 'Ukraine'}},
    //             { id: 3, photoUrl:'', fololowed: true, name:"Katya", status: 'I am a boss', location: {city: 'Chernihov', country: 'Ukraine'}},
    //             { id: 4, photoUrl:'', fololowed: false, name:"Maryna", status: 'I am a boss', location: {city: 'Chernihov', country: 'Ukraine'}},
    //             { id: 5, photoUrl:'', fololowed: true, name:"Kyrylo", status: 'I am a boss', location: {city: 'Lutava', country: 'Ukraine'}},
    //             { id: 6, photoUrl:'', fololowed: true, name:"Ivan", status: 'I am a boss', location: {city: '', country: ''}},
    //             { id: 7, photoUrl:'', fololowed: false, name:"Ira", status: 'I am a boss', location: {city: '', country: ''}},
    //             { id: 8, photoUrl:'', fololowed: true, name:"Maria", status: 'I am a boss', location: {city: '', country: ''}},
    //             { id: 9, photoUrl:'', fololowed: false, name:"Igor", status: 'I am a boss', location: {city: '', country: ''}},
            
    //           ]
    //     )
    // }

  return (
    <div className={user.wrapper}>
        {
            props.users.map(u => <div key={u.id} className={user.continer}>
                <span>
                    <div><img src={u.photoUrl} alt="" /></div>
                    <div><button>Follow</button></div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
  )
}

export default Users
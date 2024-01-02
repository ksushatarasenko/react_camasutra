const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const  SET_USERS = 'SET_USERS';

let initionalState = {
  users: [
    // { id: 1, photoUrl:'https://c0.klipartz.com/pngpicture/639/452/gratis-png-iconos-de-computadora-avatar-perfil-de-usuario-icono-de-personas.png', fololowed: false, name:"Petr", status: 'I am a boss', location: {city: 'Oster', country: 'Ukraine'}},
    // { id: 2, photoUrl:'https://c0.klipartz.com/pngpicture/639/452/gratis-png-iconos-de-computadora-avatar-perfil-de-usuario-icono-de-personas.png', fololowed: true,name:"Oksana", status: 'I am a boss', location: {city: 'Oksana', country: 'Ukraine'}},
    // { id: 3, photoUrl:'https://c0.klipartz.com/pngpicture/639/452/gratis-png-iconos-de-computadora-avatar-perfil-de-usuario-icono-de-personas.png', fololowed: true, name:"Katya", status: 'I am a boss', location: {city: 'Chernihov', country: 'Ukraine'}},
    // { id: 4, photoUrl:'https://c0.klipartz.com/pngpicture/639/452/gratis-png-iconos-de-computadora-avatar-perfil-de-usuario-icono-de-personas.png', fololowed: false, name:"Maryna", status: 'I am a boss', location: {city: 'Chernihov', country: 'Ukraine'}},
    // { id: 5, photoUrl:'https://c0.klipartz.com/pngpicture/639/452/gratis-png-iconos-de-computadora-avatar-perfil-de-usuario-icono-de-personas.png', fololowed: true, name:"Kyrylo", status: 'I am a boss', location: {city: 'Lutava', country: 'Ukraine'}},
    // { id: 6, photoUrl:'https://c0.klipartz.com/pngpicture/639/452/gratis-png-iconos-de-computadora-avatar-perfil-de-usuario-icono-de-personas.png', fololowed: true, name:"Ivan", status: 'I am a boss', location: {city: '', country: ''}},
    // { id: 7, photoUrl:'https://c0.klipartz.com/pngpicture/639/452/gratis-png-iconos-de-computadora-avatar-perfil-de-usuario-icono-de-personas.png', fololowed: false, name:"Ira", status: 'I am a boss', location: {city: '', country: ''}},
    // { id: 8, photoUrl:'https://c0.klipartz.com/pngpicture/639/452/gratis-png-iconos-de-computadora-avatar-perfil-de-usuario-icono-de-personas.png', fololowed: true, name:"Maria", status: 'I am a boss', location: {city: '', country: ''}},
    // { id: 9, photoUrl:'https://c0.klipartz.com/pngpicture/639/452/gratis-png-iconos-de-computadora-avatar-perfil-de-usuario-icono-de-personas.png', fololowed: false, name:"Igor", status: 'I am a boss', location: {city: '', country: ''}},

  ],
 
}

const userReducer = (state = initionalState, action) => {
  
  switch(action.type) {
    case FOLLOW:
        return {
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId){
                    return {...u, fololowed: true}
                }
                return u;
            })
        }
    case UNFOLLOW:
        return {
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId){
                    return {...u, fololowed: true}
                }
                return u;
            })
        }
    case SET_USERS:
        return { ...state, users: [...state.users, ...action.users] }
 
    default: return state;
  }
    
}

export const followAC = (userId) => ({type:FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const  setUsersAC = (users) => ({type: SET_USERS, users})
export default userReducer;
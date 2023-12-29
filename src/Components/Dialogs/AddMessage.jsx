
// import dialog from './dialogs.module.css'
// import React from 'react'



// function AddMessage(props) {
//   console.log('AddMessage:',props) 


//   const onSendMessageClick = () => {
//     let body = props.newMessageBody;
//     props.onSendMessage(body)
//   }


//   let onNewMessageChange = (e) => {
//     let body = e.target.value;
//     props.onNewMessage(body)
//   }

//   return (
//     <div className={dialog.addPost}>
//         <h3>Add new message</h3>
//         <div className={dialog.postBlock}>
//           <div>
//             <textarea              
//               value={props.newMessageBody}
//               onChange={onNewMessageChange}
//               placeholder='Enter your message'></textarea>
//           </div> 
//           <div>
//             <button onClick={onSendMessageClick}>Send Message</button>
//           </div>          
          
//         </div>
       
//     </div>
//   )
// }

// export default AddMessage;
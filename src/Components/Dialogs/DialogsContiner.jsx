
import Dialogs from './Dialogs'
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogReducer';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return{
    onSendMessage: () => {
      dispatch(addMessageActionCreator())
    },
    onNewMessage: (body) => {
      dispatch(updateNewMessageActionCreator(body));
    }
  }
}

const DialogsContiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContiner
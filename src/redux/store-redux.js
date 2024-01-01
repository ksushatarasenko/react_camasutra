import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogReducer";
import userReducer from "./userReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
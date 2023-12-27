
import store from './redux/store-redux'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    <Provider store={store}>
      <App/>
    </Provider> 
);
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
})



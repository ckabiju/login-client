import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'; // this is to connect react and redux.
import App from './container/App';
import * as serviceWorker from './serviceWorker';
import store from './store/reduxStore';
import "semantic-ui-css/semantic.min.css";
import {userLoggedIn} from './actions/auth';

if(localStorage.bookwormJWT){
  const user = {token: localStorage.bookwormJWT};
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App/>
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

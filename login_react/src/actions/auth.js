// This is the Thunk action. think action is a function that returns another function.

import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../types';
import api from './api/api';

/**export const login = (credentials) => () => 
api.user.login(credentials).  // Api request
then(res => res.data.user); //Response that will be returned back. */

export const userLoggedIn = user => (
    {
        type: USER_LOGGED_IN,
        user
    }
);

export const userLoggedOut = () => (
    {
        type: USER_LOGGED_OUT
    }
);

export const login = Credentials => (dispatch) =>
api.user.login(Credentials).then(user => 
    {
        localStorage.bookwormJWT = user.token; // storing the token from server to local storage 
        //so that we can repopulate the redux state when the screen is refreshed.

        dispatch(userLoggedIn(user)) // we are dispatching the returned response to redux reducer
        // so that it can update the data in store.
    }); 

    export const logout = () => dispatch =>{
        localStorage.removeItem('bookwormJWT');
        dispatch(userLoggedOut());
    }; 




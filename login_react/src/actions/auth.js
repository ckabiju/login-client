// This is the Thunk action. think action is a function that returns another function.

import {USER_LOGGED_IN} from '../types';
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

export const login = Credentials => (dispatch) =>
api.user.login(Credentials)
.then(user => dispatch(userLoggedIn(user))); // we are dispatching the returned response to redux reducer
                                            // so that it can update the data in store.





import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../types';
// Reducer is a function which takes state and action and returns a new state.
export default function user(state = {}, action = {}){
    switch (action.type){
       case USER_LOGGED_IN:
            if(action.user !== undefined){
                return action.user;
            } else{
                return state;
            }
        case USER_LOGGED_OUT:
            return{};
        default:
            return state;
    }
}
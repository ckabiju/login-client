import rootReducer from '../reducer/rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'; 
import { createStore, applyMiddleware } from 'redux';  // createStore creates the reduxStore, 
                                                       //applyMiddleware allows us to use thunk as middleware.
import thunk from 'redux-thunk'; // used to make request to server side

//Creates a Redux store that holds the complete state tree of your app. 
//There should only be a single store in your app.
//reducer (Function): A reducing function that returns the next state tree, given the current state tree and an action to handle.
//[preloadedState] (any): The initial state. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session. If you produced reducer with combineReducers, this must be a plain object with the same shape as the keys passed to it. Otherwise, you are free to pass anything that your reducer can understand.
//[enhancer] (Function): The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc. The only store enhancer that ships with Redux is applyMiddleware().

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
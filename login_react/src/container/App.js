import React from 'react';
import HomePage from '../component/pages/HomePage';
import LoginPage from '../component/pages/LoginPage';
import SignupPage from '../component/pages/SignupPage';
import DashboardPage from '../component/pages/DashboardPage';
import {Route, withRouter} from 'react-router-dom';
import UserRoute from '../component/routes/UserRoute';
import GuestRoute from '../component/routes/GuestRoute';

function App() {
  return (
    <div className="ui container">
    <Route path="/" exact component={HomePage}/>
     {/* withRoute was added to remove "Failed prop type: Invalid prop `component` of type `object" warning in browser console.*/}
    <GuestRoute path="/login" exact component={withRouter(LoginPage)}/> 
    <GuestRoute path="/signup" exact component={withRouter(SignupPage)}/>
    <UserRoute path="/dashboard" exact component={withRouter(DashboardPage)}/>
  </div>
  );
}

export default App;

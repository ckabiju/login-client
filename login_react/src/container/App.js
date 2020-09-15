import React from 'react';
import HomePage from '../component/pages/HomePage';
import LoginPage from '../component/pages/LoginPage';
import DashboardPage from '../component/pages/DashboardPage';
import {Route} from 'react-router-dom';
import UserRoute from '../component/routes/UserRoute';
import GuestRoute from '../component/routes/GuestRoute';

function App() {
  return (
    <div className="ui container">
    <Route path="/" exact component={HomePage}/>
    <GuestRoute path="/login" exact component={LoginPage}/>
    <UserRoute path="/dashboard" exact component={DashboardPage}/>
  </div>
  );
}

export default App;

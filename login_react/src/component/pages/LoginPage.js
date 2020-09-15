import React from 'react';
import LoginForm from '../forms/LoginForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login}  from '../../actions/auth';


class LoginPage extends React.Component{
    // here we are calling the login function in auth.js. 
    //should avoid using curly braces else it might throw undefined Catch exception
    //Abhi 
    submit = data => this.props.login(data).then(()=> this.props.history.push("/dashboard"));
        
    
    render(){
        
        return(
            <div>
                <h1>Login Page ...</h1>
                <LoginForm submit={this.submit}/>
            </div>
        );
    }
}

// Abhi did not understand this part.
LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
}

//export default LoginPage
export default connect(null, {login})(LoginPage); // connecting to redux

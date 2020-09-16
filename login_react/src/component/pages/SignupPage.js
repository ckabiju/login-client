import React from 'react';
import SignupForm from '../forms/SignupForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {signup}  from '../../actions/auth';


class SignupPage extends React.Component{
    // here we are calling the signup function in auth.js. 
    //should avoid using curly braces else it might throw undefined Catch exception
    //Abhi 
    submit = data => this.props.signup(data).then(()=> this.props.history.push("/dashboard"));
        
    
    render(){
        
        return(
            <div>
                <h1>Signup Page ...</h1>
                <SignupForm submit={this.submit}/>
            </div>
        );
    }
}

// Abhi did not understand this part.
SignupPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
}

//export default LoginPage
export default connect(null, {signup})(SignupPage); // connecting to redux

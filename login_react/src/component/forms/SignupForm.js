import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import validator from 'validator';
import InLineError from '../messages/InlineError';
import PropTypes from 'prop-types';

class SignupForm extends React.Component {

    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors:{
            
        }
    }

    // universal onchange handler for text fields
onChange = e => 
    this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value}
    });

onSubmit = () => {
    const errors = this.validate(this.state.data); 
    this.setState({errors});
    if(Object.keys(errors).length === 0){
        this.setState({loading: true});
     //
     this.props.submit(this.state.data)
     .catch(err => {
         if(err.response){
         if(err.response.data.errors){
            this.setState({errors: err.response.data.errors, loading: false})
         } else{
            this.setState({errors: {global: "Error Occured. Please contact system Administrator"}, loading: false})
            
         }}else if(err.request){
            this.setState({errors: {global: "Error Occured. Please contact system Administrator"}, loading: false})
             console.log("Request never let client");
         }
      });
    }
};

validate = (data) => {
    const errors = {};
    if(!validator.isEmail(data.email)) errors.email = "Invalid Email";
    if(!data.password) errors.password = "Can't be blank";
    return errors;
};

    render(){
       
        return(
                <Form onSubmit={this.onSubmit} loading = {this.state.loading}>
                     {this.state.errors.global && <Message negative>
                        <Message.Header>Authentication failed</Message.Header>
                            <p>{this.state.errors.global}</p>
                        </Message>} 
                    <Form.Field error={!!this.state.errors.email}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="eg: example@example.com"
                               value={this.state.data.email}
                               onChange={this.onChange}/>
                        {this.state.errors.email && <InLineError text={this.state.errors.email}/>}
                </Form.Field>
                <Form.Field error={!!this.state.errors.password}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="**********"
                               value={this.state.data.password}
                               onChange={this.onChange}/>
                        {this.state.errors.password && <InLineError text={this.state.errors.password}/>}
                </Form.Field>
                    <Button primary>Signup</Button>
                </Form>
        );
        
    }
}

SignupForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default SignupForm;
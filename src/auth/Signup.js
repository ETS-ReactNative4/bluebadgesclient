import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../helpers/environment'

class Signup extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            firstName: '',
            lastName: '',
            userEmail: '',
            password: ''
        }; 
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleStuff = (event) => {
        event.preventDefault();
        console.log('just a test')
        if(this.state.password.length < 6){
            alert('Password must be at least 6 characters')
        }
        if(this.state.firstName === ''){
            alert('Name cannot be blank')
        }
        if(this.state.lastName === ''){
            alert('Name cannot be blank')
        }
        else{
            this.handleSubmit();
        }
    }

    handleSubmit = (event) => { 
        
        fetch(`${APIURL}/user/signup`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: new Headers({
                'Content-Type': 'application/json' //this tells the server what info we are sending
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
            // console.log(this.state)
        }); 
        
        
    } 
 
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
            
                <Form onSubmit={this.handleStuff}>
                    <FormGroup>
                        <Label for='firstName'>First Name</Label>
                        <Input id="firstName" type='text' name='firstName' placeholder='First Name' onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='lastName'>Last Name</Label>
                        <Input id="lastName" type='text' name='lastName' placeholder='Last Name' onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='userEmail'>Email Address</Label>
                        <Input id="userEmail" type='email' name='userEmail' placeholder='enter email' onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input id='su_password' type='password' name='password' placeholder='enter password' onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Signup;
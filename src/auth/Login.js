import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../cssStuff/login.css'
import APIURL from '../helpers/environment'

class Login extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            userEmail: '',
            password: ''
        }; 
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
    }

    handleSubmit = (event) => {
        fetch(`${APIURL}/user/signin`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        })
        event.preventDefault()
        // console.log(this.state)
    }

    render() {  
        return (
            <div className='login'>
                <h1>Login</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="userEmail">Email Address</Label>
                        <Input id="li_userEmail" type="text" name="userEmail" placeholder="enter email" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type='submit'> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default Login;  
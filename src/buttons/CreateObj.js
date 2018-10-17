import React, { Component } from 'react';
import {Form, Input, FormGroup, Label, Button, Container, Row, Col } from 'reactstrap';

export default class CreateObj extends Component {
    constructor(props){
        super(props)
        this.state = {
            randomObject: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    } 

    handleStuff = (event) => {
          event.preventDefault();
        if(this.state.randomObject === ''){
            alert("Cannot be null")
        } else{
            this.handleSubmit()
        }
    }
    
    handleSubmit = (event) => {
        fetch('http://localhost:4000/objects/new', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then ((response) => response.json())
            .then((data) => {
                this.setState({randomObject: ''})
            }
        )
        
    } 



    render() {
        return(
            <div>
                 <Form onSubmit={this.handleStuff}>
                    <FormGroup>
                        <Label for='CreateObj'>Create an Item</Label>
                        <Input id='randomObject' type='text' value={this.state.randomObject} name='randomObject' placeholder='Create Item' onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type='submit'>Submit</Button>
                 </Form>          
            </div>
        )
    } 
} 
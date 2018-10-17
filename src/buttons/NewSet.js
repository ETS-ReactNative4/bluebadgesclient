import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../helpers/environment'

export default class NewSet extends Component {
    constructor(props){
        super(props)
        this.state = {
            objectSetting: ''
        };
    }

    handleChanges = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleStuffs = (event) => {
        event.preventDefault()
        if(this.state.objectSetting === ''){
            alert('Cannot be null')
        } else{
            this.handleSubmits()
        }
    }

    handleSubmits = (event) => {
        fetch(`${APIURL}/settings/newset`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then (
            response => response.json()
        ).then (
            (data) => {
               this.setState({objectSetting: ''}) 
            }
        )
    
        
    } 

    render() {
        return(
            <div>
                 <Form onSubmit={this.handleStuffs}>
                    <FormGroup>
                        <Label for='newSet'>Create a Situation</Label>
                        <Input id='objectSetting' type='text' value={this.state.objectSetting} name='objectSetting' placeholder='Create Situation' onChange={this.handleChanges}/>
                    </FormGroup>
                    <Button type='submit'> Submit </Button>
                </Form>
            </div>
        )
    }
}
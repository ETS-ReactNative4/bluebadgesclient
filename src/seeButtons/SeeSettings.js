import React, {Component} from 'react';
import {Form, Button} from 'reactstrap';
import DisplaySettings from './DisplaySettings'
import '../cssStuff/seeSetting.css'
import APIURL from '../helpers/environment'


export default class SeeSettings extends Component {
    constructor(props){
        super(props)
        this.state = {
            settings: []
        }
    }

    componentWillMount() {
        this.handleSubmit()
    }

    handleButton = (event) => {
        event.preventDefault()
        this.handleSubmit()
    }

    handleSubmit = (event) => {
        fetch(`${APIURL}/settings`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then(
            (data) => {
                return this.setState({settings: data})
            } 
        )
    
    } 

    clear = (event) => {
        event.preventDefault()
        this.setState({settings: []})
    }
    
    render(){
        return( 
            <div className='displaySetting'>
                <DisplaySettings property={this.state.settings}/>
                <Form onSubmit={this.handleButton}>
                    <Button type='submit' className='seeing'>Situations</Button>
                </Form> 
                <Form onSubmit={this.clear}>
                    <Button type='submit' className='seeing'>Close</Button>
                </Form>
            </div>
        )
    }
} 
import React, {Component} from 'react';
import {Form, Button} from 'reactstrap';
import DisplayItems from './DisplayItems'
import '../cssStuff/seeItems.css'
import APIURL from '../helpers/environment'

export default class SeeItems extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }

     componentWillMount(){
         this.handleSubmit()
     }

    handleButton = (event) => {
        event.preventDefault()
        this.handleSubmit()
    }

    handleSubmit = (event) => {
        fetch(`${APIURL}/objects`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then(
            (data) => {
                this.setState({
                    items: data
                })
                // console.log(this.state.items)
            }
        )
        // event.preventDefault()
    }
    
    clear = (event) => {
        event.preventDefault()
        this.setState({items: []})
    }


    render(){
        return(
            <div className='displayItems'>
                <DisplayItems property={this.state.items}/>
                <Form onSubmit={this.handleButton}>
                    <Button className="see" type='submit'>Items</Button>
                </Form>  
                <Form onSubmit={this.clear}>
                    <Button className="see" type='submit'>Close</Button>
                </Form>
            </div>
        )
    }
}  
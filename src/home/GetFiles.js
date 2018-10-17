import React, { Component } from 'react';
import DisplayFiles from './DisplayFiles';


export default class GetFiles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userStory: []
        }
    }

    componentWillMount(){
        this.handleSubmit()
    }

    handleSubmit = (event) => {
        fetch('http://localhost:4000/stories/getall', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then(
            (data) => {
                this.setState({
                    userStory: data
                })
                // console.log(this.state.userStory)
            }
        )
    }

    render(){
        return(
            <div>
                <DisplayFiles property={this.state.userStory}/>
            </div>
        )
    }
}  
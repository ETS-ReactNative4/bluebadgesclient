import React, { Component } from 'react'
import { Form, Input, Button, Label, FormGroup, Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import APIURL from '../helpers/environment'

export default class ProtectedStories extends Component {
    constructor(props){
        super(props)
        this.state = {
            userStory: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
         console.log('this function is running')
    }

     handleSubmit = (event) => {
         fetch(`${APIURL}/stories/new`, {
             method: 'POST',
             body: JSON.stringify(this.state),
             headers: new Headers ({
                 'Content-Type': 'application/json',
                 'Authorization': this.props.token
             })
         }).then ((response) => response.json())
         .then((data) => {
             this.setState({userStory: ''})
         })
         event.preventDefault();
     }

     render(){
         return(
             <div>
                <Container> 
                    <Row>
                        <Col md='12' md={{size: 6, offset: 3}}>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for='userStory'>Write a story</Label>
                                    <Input  style={{height: '200px'}} id='ps_story' type='text' name='userStory' placeholder='enter story' value={this.state.userStory} onChange={this.handleChange} >
                                    </Input>
                                </FormGroup>
                                    <Button>Submit Story</Button>
                            </Form>
                            <Button className='color'><Link to='/log'>Back</Link></Button>
                        </Col>
                    </Row>
                 </Container>
             </div>
        )
    }
}
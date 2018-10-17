import React, {Component } from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalHeader} from 'reactstrap';

class ObjectsEdit extends Component {
    constructor(props) {
        super(props)
        this.state ={
            id: '',
            randomObject: ''
        };
    }

    componentWillMount() {
        console.log('componentWillMount')
        this.setState({
            id: this.props.object.id,
            randomObject: this.props.object.randomObject
        })
    }

    handleChange = (event) => {
        console.log('handleChange')
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log('handleSubmit')
        event.preventDefault();
        this.props.update(event, this.state) 
    }
    render() {
        return(
            <div>
                <Modal isOpen={true}>
                <ModalHeader >Log an Item</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for='result'>Result</Label>
                            <Input id='randomObject' type='text' name='randomObject' value={this.state.randomObject}
                            placeholder='enter an item' onChange={this.handleChange} />
                        </FormGroup>
                        <Button type='submit' color='primary'> Submit </Button>
                    </Form>
                </ModalBody> 
                </Modal>
            </div>
        )
    }
}

export default ObjectsEdit;
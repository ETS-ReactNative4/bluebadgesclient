import React, {Component } from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalHeader} from 'reactstrap';

class SettingsEdit extends Component {
    constructor(props) {
        super(props)
        this.state ={
            id: '',
            objectSetting: ''
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.setting.id,
            objectSetting: this.props.setting.objectSetting
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state) 
    }
    render() {
        return(
            <div>
                <Modal isOpen={true}>
                <ModalHeader >Log a situation</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for='result'>Result</Label>
                            <Input id='objectSetting' type='text' name='objectSetting' value={this.state.objectSetting}
                            placeholder='enter situation' onChange={this.handleChange} />
                        </FormGroup>
                        <Button type='submit' color='primary'> Submit </Button>
                    </Form>
                </ModalBody> 
                </Modal>
            </div>
        )
    }
}

export default SettingsEdit; 
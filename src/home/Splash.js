import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import '../cssStuff/splash.css'
// import NewSet from '../buttons/NewSet';
import DestroySet from '../buttons/DestroySet';
// import CreateObj from '../buttons/CreateObj';
import DeleteObj from '../buttons/DeleteObj';
import SettingsEdit from '../buttons/SettingsEdit'
import ObjectsEdit from '../buttons/ObjectsEdit'

class Splash extends Component {
    constructor(props){
        super(props)
        this.state = {
            settings: [],
            randomObject: [],
            settingToUpdate: {},
            objectToUpdate: {},
            updatePressed: false,
            updatesPressed: false
        } 
    }

    componentWillMount() {
        this.fetchSettings()
        this.fetchObjects()
    } 

    fetchSettings = () => {
        fetch('http://localhost:4000/settings/', { 
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.tokens
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            return this.setState({settings: logData})
        })
        // console.log(this.state) 
    }

    settingsDelete = (event) => {
        console.log('IT WORKS')
        fetch(`http://localhost:4000/settings/delete/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ id: event.target.id} ),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.tokens
            })
        })
        .then((res) => this.fetchSettings())
        event.preventDefault();
       
    }

    fetchObjects = () => {
        fetch('http://localhost:4000/objects/', { 
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.tokens
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            return this.setState({randomObject: logData})
        })
        // console.log(this.state) 
    }

    objectDelete = (event) => {
        console.log('IT WORKS')
        fetch(`http://localhost:4000/objects/delete/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ id: event.target.id} ),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.tokens
            })
        })
        .then((res) => this.fetchObjects())
        event.preventDefault();
       
    }

    settingsUpdate = (event, setting) => {
        fetch(`http://localhost:4000/settings/update/${setting.id}`, {
            method: 'PUT',
            body: JSON.stringify(setting),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.tokens
            })
        })
        .then((res) => {
            this.setState({updatePressed: false})
            this.fetchSettings();
        })
    }

    setUpdatedSetting = (event, setting) => {
        console.log('setUpdatedSetting')
        this.setState({
            settingToUpdate: setting,
            updatePressed: true
        })
    }

    objectsUpdate = (event, object) => {
        console.log('objectsUpdate')
        fetch(`http://localhost:4000/objects/update/${object.id}`, {
            method: 'PUT',
            body: JSON.stringify(object),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.tokens
            })
        })
        .then((res) => {
            this.setState({updatesPressed: false})
            this.fetchObjects();
        })
    }

    setUpdatedObject = (event, object) => {
        console.log('setUpdatedObject')
        this.setState({
            objectToUpdate: object,
            updatesPressed: true
        })
    } 

    render() { 
        return (
            <div>
                <Container className='main'> 
                    <Row>
                        <Col md='6'>
                            <DeleteObj objectsData={this.state.randomObject} delete={this.objectDelete} updates={this.setUpdatedObject}/>
                        </Col>
                        <Col md='6'>
                            <DestroySet settingsData={this.state.settings} delete={this.settingsDelete} update={this.setUpdatedSetting}/>
                        </Col>
                    </Row>
                    <Container>
                        <Row>
                            <Col md='12'>
                            {
                     this.state.updatesPressed ? <ObjectsEdit t={this.state.updatesPressed} update={this.objectsUpdate} object={this.state.objectToUpdate} />
                     : <div></div>
                 }
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Container> 
                    <Row>
                        <Col md='12'>
                        {
                     this.state.updatePressed ? <SettingsEdit t={this.state.updatePressed} update={this.settingsUpdate} setting={this.state.settingToUpdate} />
                     : <div></div>
                 }
                        </Col>
                    </Row>
                    <Button className='color'><Link to='/log'>Back</Link></Button>
                </Container>
            </div>
        )
    }    
    
}

export default Splash; 
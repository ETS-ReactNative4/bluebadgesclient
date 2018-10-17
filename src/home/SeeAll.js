import React, {Component} from 'react';
import SeeSettings from '../seeButtons/SeeSettings'
import SeeItems from '../seeButtons/SeeItems'
import '../cssStuff/seeAll.css'
import {Col, Row, Container} from 'reactstrap'

export default class SeeAll extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div className="display">
            <Container>
                <Row>
                    <Col md='6'>
                        <SeeSettings />
                    </Col>
                    <Col md='6'>
                        <SeeItems />
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}   
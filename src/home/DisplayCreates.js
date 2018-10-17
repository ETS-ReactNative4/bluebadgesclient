import React, { Component } from 'react';
import { Container, Col, Row, Button} from 'reactstrap'
import NewSet from '../buttons/NewSet'
import CreateObj from '../buttons/CreateObj'
import {Link} from 'react-router-dom'

class DisplayCreates extends Component {
    constructor(props){
        super(props)
        this.state ={}
    }
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col md='12' md={{size: 4, offset: 4}}>
                            <NewSet className="create" token={this.props.token} />
                            <CreateObj className="create" token={this.props.token} />
                        </Col>
                        {/* <Col md='6'>
                        </Col> */}
                    </Row>
                </Container>
                <Button className='color'><Link to='/log'>Back</Link></Button>
            </div>
        )
    }
}

export default DisplayCreates;  
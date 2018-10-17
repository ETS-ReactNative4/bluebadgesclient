import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup'
import Login from './Login'
// import './auth.css'
import '../cssStuff/auth.css'

const Auth = (props) => {
    return(
        <Container className='auth-container auths'>
            <Row>
                <Col md="6" className='signsUp'>
                    <Signup setToken={props.setToken} />
                </Col>
                <Col md="6" className='login-col logins'>
                    <Login setToken={props.setToken}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth; 
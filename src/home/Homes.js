import React, { Component } from 'react';
import '../cssStuff/home.css'
import {Route, Switch, Link} from 'react-router-dom'
import SeeAll from '../home/SeeAll'
import GetFiles from '../home/GetFiles'
import {Button, Card, CardBody, CardTitle, CardText, Container, Row, Col, Jumbotron} from 'reactstrap'
class Homes extends Component{
    constructor(props) {
        super(props)
        this.state = {
            
        };
    }
    render(){   
    return(
        <div className="allThings">
                <Jumbotron>
                    <h1>Story Constructor</h1>
                </Jumbotron>
             <Container>
                <Row>
                    <Col md="12" md={{ size: 6, offset: 3 }}>
                        <Card className='homeCard'>
                            <CardBody>
                            <CardTitle>Story Constructor</CardTitle>
                            <CardText>Welcome to Story Constructor! Here we give you the properties you need to start writing
                             a super story! First, select a setting. This is the state in which things appear when your story begins.
                             Second, select an item. This is the object, or main character in your story. Bring this item to life as 
                            it operates in the scenario you've selected. Remember, every good story has a problem that needs fixing.
                            This is up to you! Give your object a problem, and resolve it. Members have submitted stories; 
                            feel free to take a look at their examples, and remember, always have fun! 
                            </CardText>
                            </CardBody>
                        </Card>
                     </Col>
                </Row>
            </Container> 
            <Container>
                <Row>
                    <Col md='6'>
                        <Card className='cardOne'>
                            <CardBody>
                                <CardTitle>Short Stories!</CardTitle>
                                <CardText>Take a look at all of our short stories, and sign up to submit your own!</CardText>
                            </CardBody>
                        </Card>
                        <Button href='/stories' className='button'>
                            See Short Stories
                        </Button>
                                </Col>
                                <Col md='6'>
                        <Card className='cardOne'>
                            <CardBody>
                                <CardTitle>Settings and Items</CardTitle>
                                <CardText>Get started with our list of scenarios, and items!</CardText>
                            </CardBody>
                        </Card>
                        <Button href='/seeall' className="button">
                            All Settings and Items
                        </Button>
                    </Col>
                </Row>
            </Container>  
            <Switch>
                <Route exact path='/stories'><GetFiles /></Route>
                <Route exact path='/seeall'><SeeAll /></Route>
            </Switch> 
        </div> 
    ) 
  }
}

export default Homes;
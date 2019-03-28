import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, Button, NavbarToggler, Collapse } from 'reactstrap' 
import {
    Route, 
    Switch
} from 'react-router-dom'
import '../cssStuff/sideBar.css'

import Log from './Log'
import Home from './Home'
import SeeAll from './SeeAll'
import GetFiles from './GetFiles'


class Sidebar extends Component  { 
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    } 

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen 
        });
    }
    render() {
        return( 
            <div className="sidebar">
                <Navbar color="light"  light expand="md">
                 <NavbarBrand href="/">Story Constructor</NavbarBrand> 
                     <NavbarToggler onClick={this.toggle} /> 
                     <Collapse isOpen={this.state.isOpen} navbar> 
                        <Nav className="ml-auto" navbar>
                            <Button href='/'className="button">
                                Home
                            </Button>
                            <Button href='/log' className="button">
                                Options/Sign in/up
                            </Button>
                             <Button href='/stories' className="button">
                                See Short Stories
                            </Button>
                            <Button href='/seeall' className="button">
                                All Settings and Items
                            </Button> 
                        </Nav>
                        </Collapse>
                </Navbar>  
                    <div>
                         <Switch>
                             <Route exact path='/'><Home /></Route>
                             <Route exact path='/log'><Log /></Route>
                             <Route exact path='/stories'><GetFiles /></Route>
                             <Route exact path='/seeall'><SeeAll /></Route> 
                         </Switch>
                     </div>
             </div>
        )
    }
} 


export default Sidebar;     
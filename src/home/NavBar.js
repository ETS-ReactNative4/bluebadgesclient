import React, { Component } from 'react';
import '../cssStuff/NavBars.css'
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import {Table, Button, Navbar, NavItem, Collapse, NavbarToggler, Nav, NavbarBrand} from 'reactstrap'

import Splash from '../home/Splash'
import DisplayCreates from '../home/DisplayCreates'
import Logout from './Logout'
import '../cssStuff/navbar.css'
import ProtectedStories from '../buttons/ProtectedStories'

class NavBar extends Component {
    constructor(props){
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
    render(){  
        return(
            <div>
                  <div> 
                     <Navbar color='faded' light expand='md'> 
                     <NavbarBrand><Button className='logg' onClick={this.props.clickLogout}>Log Out</Button></NavbarBrand>
                         <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className='ml-auto' navbar> 
                                    <NavItem>   
                                        <Button className='color'><Link to='/mystories'>Short Stories</Link></Button>
                                    </NavItem>
                                    <NavItem>
                                        <Button className='color'><Link to='/things'>Update/Delete</Link></Button>
                                    </NavItem>
                                    <NavItem>
                                        <Button className='color'><Link to='/display'>Create</Link></Button>
                                    </NavItem>
                                </Nav>
                             </Collapse>
                    </Navbar> 
                </div>  
                <div>
                    <Switch> 
                        <Route exact path='/things'><Splash tokens={this.props.sessionToken}/></Route>
                        <Route exact path='/display'><DisplayCreates token={this.props.sessionToken}/></Route>
                        <Route exact path='/mystories'><ProtectedStories token={this.props.sessionToken}/></Route>
                    </Switch>   
                </div>
            </div>
        )
    }

}

export default NavBar;  
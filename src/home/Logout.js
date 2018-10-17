import React, { Component } from 'react';
import {
    Collapse,
    Navbar, 
    NavbarToggler,
    Nav,
    NavItem,
    Button
} from 'reactstrap'; 
import '../cssStuff/logout.css'

class Logout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false 
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen 
        });
    } 

    render() {
        return (
            <div>
                <Navbar color='faded' light expand='md'>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                         <Nav className="ml-auto" navbar> 
                             <NavItem> 
                                <Button className='logg' onClick={() => this.props.logout()}>Logout</Button>
                             </NavItem> 
                         </Nav> 
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Logout;
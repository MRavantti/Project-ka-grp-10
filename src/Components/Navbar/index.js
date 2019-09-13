import React, { Component, Fragment } from 'react';
import './Navbar.css';
import NavbarItems from '../NavbarItems';

export class Navbar extends Component {
    render() {
        return(
            <Fragment>
                <div className="navbar">
                    <NavbarItems />
                </div>
            </Fragment>
        )
    }
}

export default Navbar;
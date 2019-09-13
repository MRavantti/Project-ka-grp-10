import React, { Component, Fragment } from 'react';
import './Navbar.css';
import NavbarItems from '../NavbarItems';
import MobileMenu from '../MobileMenu';

export class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <div className="navbar">
                    <NavbarItems />
                </div>
                <MobileMenu />
            </Fragment>
        )
    }
}

export default Navbar;
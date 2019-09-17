import React, { Component, Fragment } from 'react';
import './style.css';

import MobileMenu from '../MobileMenu';
import NavbarItems from '../NavbarItems'




export class Navbar extends Component {

    state = {
        menuVisable: false
    }

    toggleMenu = () => {
        this.setState(prevState => ({
            menuVisable: !prevState.menuVisable
        }))
    }

    render() {
        return (
            <Fragment>
                {
                    this.state.menuVisable ?
                        <Fragment>
                            <MobileMenu toggleMenu={ this.toggleMenu } />
                            <div className="navbar">
                                <NavbarItems toggleMenu={ this.toggleMenu } />
                            </div>
                        </Fragment>
                        :
                        <div className="navbar">
                            <NavbarItems toggleMenu={ this.toggleMenu } />
                        </div>
                }
            </Fragment>
        )
    }
}

export default Navbar;
import React, { Component, Fragment } from 'react';
import './NavbarItems.css';

import SearchIcon from '../../Images/icon.png';
import Logo from '../../Images/logo.png';
import BurgerIcon from '../../Images/burger-menu.png';

export class NavbarItems extends Component {
    render() {
        return (
            <Fragment>
                <img className="search-icon" src={ SearchIcon } alt="search icon"/>
                <img className="logo" src={ Logo } alt="logo" />
                <img className="burger-icon" src={ BurgerIcon } alt="buger icon"/>
            </Fragment>
        )
    }
}

export default NavbarItems;
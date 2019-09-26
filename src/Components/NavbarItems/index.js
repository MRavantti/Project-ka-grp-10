import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export class NavbarItems extends Component {
    render() {
        const { toggleMenu } = this.props
        return (
            <Fragment>
                <img className="search-icon navbar-item" src="/assets/svgs/search.svg" alt="search icon" />
                <Link to="/"><img className="logo navbar-item" src="/assets/svgs/k-play.svg" alt="logo" /></Link>
                <img onClick={ toggleMenu } className="burger-icon navbar-item" src="/assets/svgs/menu.svg" alt="buger icon" />
            </Fragment>
        )
    }
}

export default NavbarItems;
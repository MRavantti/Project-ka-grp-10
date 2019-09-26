import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export class NavbarItems extends Component {
    render() {
        const { toggleMenu } = this.props
        const { toggleSearch } = this.props
        const { hideSearch } = this.props
		const { searchVisible } = this.props

        return (
            <Fragment>
                {searchVisible ? <img onClick={toggleSearch} className="navbar-item" src="/assets/svgs/cross.svg" alt="search icon" /> 
				: <img onClick={toggleSearch} className="search-icon navbar-item" src="/assets/svgs/search.svg" alt="search icon"/>}
                <Link onClick={hideSearch} to="/"><img className="logo navbar-item" src="/assets/svgs/k-play.svg" alt="logo" /></Link>
                <img onClick={ toggleMenu } className="burger-icon navbar-item" src="/assets/svgs/menu.svg" alt="buger icon" />
            </Fragment>
        )
    }
}

export default NavbarItems;
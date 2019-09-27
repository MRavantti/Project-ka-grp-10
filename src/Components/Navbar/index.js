import React, { Component, Fragment } from 'react';
import './style.css';

import MobileMenu from '../MobileMenu';
import NavbarItems from '../NavbarItems';
import SearchBar from '../SearchBar';

export class Navbar extends Component {

    state = {
		menuVisable: false,
		searchVisable: false,
    }

    toggleMenu = () => {
        this.setState(prevState => ({
			searchVisable: false,
			menuVisable: !prevState.menuVisable,
		}))
	}
	
	toggleSearch = () => {
		this.setState(prevState => ({
			menuVisable: false,
			searchVisable: !prevState.searchVisable,
		}))
	}

	hideSearch = () => {
		this.setState(() => ({
			searchVisable: false
		}))
	}

    render() {
        return (
            <Fragment>
				<SearchBar myClass={this.state.searchVisable ? "visible" : null}/>
                        <Fragment>
                            <MobileMenu toggleMenu={this.toggleMenu} myClass={this.state.menuVisable ? "visible" : null}/>
                        </Fragment>
                        
                        <div className="navbar">
                            <NavbarItems toggleMenu={this.toggleMenu} toggleSearch={this.toggleSearch} searchVisible={this.state.searchVisable} hideSearch={this.hideSearch}/>
                        </div>
            </Fragment>
        )
    }
}

export default Navbar;
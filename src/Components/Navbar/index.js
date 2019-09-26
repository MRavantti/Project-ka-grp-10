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
		console.log('click');
		this.setState(() => ({
			searchVisable: false
		}))
	}

    render() {
        return (
            <Fragment>
				<SearchBar class={this.state.searchVisable ? "visible" : null}/>
                {
                    this.state.menuVisable
                        ? <Fragment>
                            <MobileMenu toggleMenu={this.toggleMenu} />
                            <div className="navbar">
                                <NavbarItems toggleMenu={this.toggleMenu} />
                            </div>
                        </Fragment>
                        
                        : <div className="navbar">
                            <NavbarItems toggleMenu={this.toggleMenu} toggleSearch={this.toggleSearch} searchVisible={this.state.searchVisable} hideSearch={this.hideSearch}/>
                        </div>
                }
            </Fragment>
        )
    }
}

export default Navbar;
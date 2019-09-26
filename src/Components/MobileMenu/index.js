import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

export class MobileMenu extends Component {

    render() {
        const { toggleMenu } = this.props
        return (
            <Fragment>
                <div className="mobile-menu">

                    <div className="mobile-menu-top">
                        <p>KATEGORIER</p>
                    </div>
					<img onClick={toggleMenu} className="cross-icon" src="/assets/svgs/cross.svg" alt="cross icon" />

					<div className="border-line" />

                    <div className="mobile-menu-middle">
                        <Link to="/category/dans" onClick={toggleMenu}><div className="dance-item">
                            <p>Dans</p>
                        </div></Link>
                        <Link to="/category/film" onClick={toggleMenu}><div className="movie-item">
                            <p>Film</p>
                        </div></Link>
                        <Link to="/category/musik" onClick={toggleMenu}><div className="music-item">
                            <p>Musik</p>
                        </div></Link>
                        <Link to="/category/teater" onClick={toggleMenu}><div className="theatre-item">
                            <p>Teater</p>
                        </div></Link>
                    </div>

                    <div className="border-line" />
                    
                    <div className="mobile-menu-bottom">
                        <Link to="/profile"><div className="profile-item">
                            <img src="/assets/svgs/person.svg" alt="profile icon" />
                            <p>Min profil</p>
                        </div></Link>
                        <a href="mailto:info@kulturakademin.com"><div className="contact-item">
                            <img src="/assets/svgs/contact.svg" alt="contact icon" />
                            <p>Kontakt</p>
                        </div></a>
                        <a href="https://www.kulturakademin.com"><div className="about-item">
                            <img src="/assets/svgs/info-icon.svg" alt="about icon" />
                            <p>Kulturakademin</p>
                        </div></a>
                    </div>
                    
                </div>
            </Fragment>
        )
    }
}

export default MobileMenu;
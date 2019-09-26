import React, { Component, Fragment } from 'react';
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
                        <div className="dance-item">
                            <p>Dans</p>
                        </div>
                        <div className="movie-item">
                            <p>Film</p>
                        </div>
                        <div className="music-item">
                            <p>Musik</p>
                        </div>
                        <div className="theatre-item">
                            <p>Teater</p>
                        </div>
                    </div>

                    <div className="border-line" />
                    
                    <div className="mobile-menu-bottom">
                        <div className="profile-item">
                            <img src="/assets/svgs/person.svg" alt="profile icon" />
                            <p>Min profil</p>
                        </div>
                        <div className="contact-item">
                            <img src="/assets/svgs/contact.svg" alt="contact icon" />
                            <p>Kontakt</p>
                        </div>
                        <div className="about-item">
                            <img src="/assets/svgs/info-icon.svg" alt="about icon" />
                            <p>Kulturakademin</p>
                        </div>
                    </div>
                    
                </div>
            </Fragment>
        )
    }
}

export default MobileMenu;
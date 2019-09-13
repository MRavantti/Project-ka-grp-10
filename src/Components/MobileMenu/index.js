import React, { Component, Fragment } from 'react';
import './MobileMenu.css'

import CrossIcon from '../../Images/cross-icon.png';
import DanceIcon from '../../Images/dance-icon.png';
import MovieIcon from '../../Images/movie-icon.png';
import MusicIcon from '../../Images/music-icon.png';
import TheatreIcon from '../../Images/theatre-icon.png';
import ProfileIcon from '../../Images/profile-icon.png';
import ContactIcon from '../../Images/contact-icon.png';
import AboutIcon from '../../Images/about-icon.png';


export class MobileMenu extends Component {
    render() {
        return (
            <Fragment>
                <div className="mobile-menu">
                    <div className="mobile-menu-top">
                        <p>KATEGORIER</p>
                        <img className="cross-icon" src={CrossIcon} alt="cross icon" />
                    </div>

                    <div className="mobile-menu-middle">
                        <div className="dance-item">
                            <img src={DanceIcon} alt="dance icon" />
                            <p>Dans</p>
                        </div>
                        <div className="movie-item">
                            <img src={MovieIcon} alt="movie icon" />
                            <p>Film</p>
                        </div>
                        <div className="music-item">
                            <img src={MusicIcon} alt="music icon" />
                            <p>Musik</p>
                        </div>
                        <div className="theatre-item">
                            <img src={TheatreIcon} alt="theatre icon" />
                            <p>Teater</p>
                        </div>
                    </div>
                    <div className="border-line" />
                    <div className="mobile-menu-bottom">
                        <div className="profile-item">
                            <img src={ProfileIcon} alt="profile icon" />
                            <p>Min profil</p>
                        </div>
                        <div className="contact-item">
                            <img src={ContactIcon} alt="contact icon" />
                            <p>Kontakt</p>
                        </div>
                        <div className="about-item">
                            <img src={AboutIcon} alt="about icon" />
                            <p>Kulturakademin</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MobileMenu;
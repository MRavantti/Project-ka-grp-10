import React from 'react';
import './style.css'

const Footer = (props) => {

    let className;

    if (props.player) {
        if (props.location.state) {
            if (props.player.includes(props.location.state.playerId)) {
                className = null;
            }
        }   
        else {
            className = "margin";
        } 
    }

    return (
        <div className={`footer ${className}`}>
            <img src="/assets/svgs/kulturakademin.svg" alt="kulturakademin icon"/>
            <a href="https://kulturakademin.com">kulturakademin.com</a>
            <div className="icons">
                <img src="/assets/svgs/facebook.svg" alt="facebook icon"/>
                <img src="/assets/svgs/instagram.svg" alt="instagram icon"/>
            </div>
        </div>
    );
};

export default Footer;
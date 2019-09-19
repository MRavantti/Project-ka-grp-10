import React from 'react';
import './style.css'

const Footer = () => {
    return (
        <div className="footer">
            <img src="/svgs/kulturakademin.svg" alt="kulturakademin icon"/>
            <a href="https://kulturakademin.se">kulturakademin.com</a>
            <div className="icons">
                <img src="/svgs/facebook.svg" alt="facebook icon"/>
                <img src="/svgs/instagram.svg" alt="instagram icon"/>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import './style.css'

const Footer = () => {
    return (
        <div className="footer">
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
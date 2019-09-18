import React from 'react';
import './style.css';
import TypeIcon from '../TypeIcon';

const Header = () => {
    return (
        <div className="header" style={{backgroundImage:"url(https://i.ytimg.com/vi/UmGkHDYJRk4/hqdefault.jpg)"}}>
            <p>Videoföreläsning</p>
            <h1>Kroppens Betydelse I Sång</h1>
            <p>Kulturakademins kurs i sånggestaltning.</p>
            <p>Kursledare Pia Olby om kroppens betydelse i sång.</p>
            <TypeIcon type="video" size="large"/>
        </div>
    );
};

export default Header;
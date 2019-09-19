import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import TypeIcon from '../TypeIcon';

const Header = () => {
    const id = 10;
    return (
        <Link to={{
            pathname: `/player/${id}`,
            state: {
                playerId: id
            }
        }}>
            <div className="header" style={{backgroundImage:"url(https://i.ytimg.com/vi/UmGkHDYJRk4/hqdefault.jpg)"}}>
                <p>Videoföreläsning</p>
                <h1>Kroppens Betydelse I Sång</h1>
                <p>Kulturakademins kurs i sånggestaltning.</p>
                <p>Kursledare Pia Olby om kroppens betydelse i sång.</p>
                <TypeIcon type="video" size="large"/>
            </div>
        </Link>
    );
};

export default Header;
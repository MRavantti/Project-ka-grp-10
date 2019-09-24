import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import TypeIcon from '../TypeIcon';

const Header = ({content}) => {
    return (
        <Link to={{
            pathname: `/player/${content.id}`,
            state: {
                playerId: content.id
            }
        }}>
            <div className="header" style={{backgroundImage: `url(${content.thumbnails.high.url})`}}>
                <p>Videoföreläsning</p>
                <h1>{content.title}</h1>
                <p>{content.description}</p>
                <TypeIcon type={content.type} size="large"/>
            </div>
        </Link>
    );
};

export default Header;
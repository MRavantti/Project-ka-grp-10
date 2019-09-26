import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import TypeIcon from '../TypeIcon';

const Hero = ({content}) => {

	let title = content.title;
	title = title.toLowerCase();

	let description = content.description[0];
	description = description.toLowerCase();

    return (
        <Link to={{
            pathname: `/player/${content.id}`,
            state: {
                playerId: content.id
            }
        }}>
            <div className="hero">
                <span>Videoföreläsning</span>
                <h1>{title}</h1>
                <p>{description}</p>
                <TypeIcon type={content.type} size="large"/>
            </div>
        </Link>
    );
};

export default Hero;
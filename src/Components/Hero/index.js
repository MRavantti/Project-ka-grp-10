import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import TypeIcon from '../TypeIcon';

const Hero = ({content}) => {

	let title = content.longTitle.split("- ");
	title = title[1].split("(");
	title = title[0];

	// let description = content.description[0];
	// if (description.length > 100) {
	// 	description = description.slice(0, 75);
	// }
	// console.log(description.length);

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
                <p>Sångpedagogen Pia Olby förklarar.</p>
                <TypeIcon type={content.type} size="large"/>
            </div>
        </Link>
    );
};

export default Hero;
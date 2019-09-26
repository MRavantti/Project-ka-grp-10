import React from 'react';
import './style.css';

const InfoBox = () => {
    return (
        <ul className="info-box">
            <li>Längd: <span>34 min</span></li>
			<li>Språk: <span>Svenska</span></li>
            <li>Publicerades: <span>11 sep 2019</span></li>
            <li>Kategori: <span>Musik</span></li>
            <li>I samarbete med: <span>Teateralliansen</span></li>
        </ul>
    );
};

export default InfoBox;
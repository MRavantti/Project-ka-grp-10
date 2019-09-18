import React from 'react';
import './style.css';
import Thumbnail from '../Thumbnail';

const ContentBox = (props) => {
    return (
        <div className={`content-box ${props.size}`}>
            <Thumbnail  type={props.type} size={props.size}/>
            <div className="text-box">
                {props.info && <span>{props.info}</span>}
                <h5>Netflix Ambitions</h5>
                <p>Netflix's Lina Broneus on the plans for the Nordic regions</p>
            </div>
        </div>
    );
};

export default ContentBox;
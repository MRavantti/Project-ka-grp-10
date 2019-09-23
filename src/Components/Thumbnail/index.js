import React from 'react';
import './style.css';
import TypeIcon from '../TypeIcon';

const Thumbnail = (props) => {
    return (
        <div className={`thumbnail-box ${props.size}`} style={{ backgroundImage:`url(${props.img})`}}>
            <TypeIcon type={props.type} size={props.size} date={props.date}/>
        </div>
    );
};

export default Thumbnail;
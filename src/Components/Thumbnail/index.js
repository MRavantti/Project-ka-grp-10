import React from 'react';
import './style.css';
import TypeIcon from '../TypeIcon';

const Thumbnail = (props) => {
	let thumbnail;
    thumbnail = props.content.thumbnail ? props.content.thumbnail : props.content.thumbnails.high.url
    if (props.image) {
        thumbnail = props.image;
    }
	
    return (
        <div className={`thumbnail-box ${props.size}`} style={{backgroundImage:`url(${thumbnail})`}}>
            <TypeIcon type={props.type} size={props.size}/>
        </div>
    );
};

export default Thumbnail;
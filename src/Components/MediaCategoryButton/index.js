import React from 'react';
import { Link } from 'react-router-dom';
import './MediaCategoryButton.css'

const MediaCategoryButton = (props) => {
    return (
        <div className={`category-button ${props.className}`} onClick={props.filterFunc} style={{backgroundColor: `${props.backgroundColor}`}}>
			<img className="media-icon" src={`/assets/svgs/${props.text === "Videor" ? "video" : "podcast"}.svg`} alt="media icon" />
			{props.text}
        </div>
    )
}

export default MediaCategoryButton;
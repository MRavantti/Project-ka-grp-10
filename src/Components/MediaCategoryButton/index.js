import React from 'react';
import { Link } from 'react-router-dom';
import './MediaCategoryButton.css'

import MediaIcon from '../../Images/media-icon.png'

const MediaCategoryButton = (props) => {
    return (
        <div className={props.className}>
            <Link to="link">
                <button style={{backgroundColor: `${props.backgroundColor}`}}>
                    <img className="media-icon" src={MediaIcon} alt="media icon" />
                    {props.text}
                </button>
                </Link>
        </div>
    )
}

export default MediaCategoryButton;
import React from 'react';
import { Link } from 'react-router-dom';
import './MediaCategoryButton.css'

const MediaCategoryButton = (props) => {
    return (
        <div className={props.className}>
            <Link to="link">
                <button style={{backgroundColor: `${props.backgroundColor}`}}>
                    <img className="media-icon" src={`/assets/svgs/${props.text === "Videor" ? "video.svg" : "podcast.svg"}`} alt="media icon" />
                    {props.text}
                </button>
                </Link>
        </div>
    )
}

export default MediaCategoryButton;
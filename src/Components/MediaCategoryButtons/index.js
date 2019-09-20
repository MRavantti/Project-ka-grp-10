import React from 'react';
import MediaButton from '../MediaCategoryButton';
import './MediaCategoryButtons.css'

const MediaCategoryButtons = (props) => {
    return (
        <div className="media-category-buttons">
            <MediaButton className="video category-button" backgroundColor="#3D8FAA" text="Videor"/>
            <MediaButton className="podcast category-button" backgroundColor="#8973B8" text="Podcasts"/>
        </div>
    )
}

export default MediaCategoryButtons
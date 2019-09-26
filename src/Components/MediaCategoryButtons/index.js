import React from 'react';
import MediaButton from '../MediaCategoryButton';
import './MediaCategoryButtons.css'

const MediaCategoryButtons = (props) => {
    return (
        <div className="media-category-buttons">
            <MediaButton className="video" backgroundColor="#3D8FAA" text="Videor" filterFunc={props.filterFunc}/>
            <MediaButton className="podcast" backgroundColor="#8973B8" text="Podcasts" filterFunc={props.filterFunc}/>
        </div>
    )
}

export default MediaCategoryButtons
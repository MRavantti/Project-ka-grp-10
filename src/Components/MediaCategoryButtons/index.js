import React, { useState, useEffect } from 'react';
import MediaButton from '../MediaCategoryButton';
import './MediaCategoryButtons.css'

const MediaCategoryButtons = (props) => {

	const [videoBackground, setVideoBackground] = useState("#66ABC1");
	const [podcastBackground, setPodcastBackground] = useState("#A48ED5");

	useEffect(() => {
		setVideoBackground(props.filter === "videos" ? "#3D8FAA" : "#66ABC1");
		setPodcastBackground(props.filter === "podcasts" ? "#8973B8" : "#A48ED5");
	}, [props.filter])

    return (
        <div className="media-category-buttons">
            <MediaButton className="video" backgroundColor={videoBackground} text="Videor" filterFunc={props.filterFunc}/>
            <MediaButton className="podcast" backgroundColor={podcastBackground} text="Podcasts" filterFunc={props.filterFunc}/>
        </div>
    )
}

export default MediaCategoryButtons
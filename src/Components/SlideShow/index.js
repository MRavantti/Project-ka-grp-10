import React from 'react';
import './style.css';
import Thumbnail from '../Thumbnail';

const SlideShow = () => {
    return (
        <div className="carousel">
            <Thumbnail type="video" size="small"/>
            <Thumbnail type="video" size="small"/>
            <Thumbnail type="video" size="small"/>
            <Thumbnail type="video" size="small"/>
            <Thumbnail type="video" size="small"/>
        </div>
    );
};

export default SlideShow;
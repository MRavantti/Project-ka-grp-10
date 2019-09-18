import React from 'react';
import './style.css';
import ContentBox from '../ContentBox';

const SlideShow = (props) => {
    return (
        <div className="carousel">
            <ContentBox type={props.type} size="small"/>
            <ContentBox type={props.type} size="small"/>
            <ContentBox type={props.type} size="small"/>
            <ContentBox type={props.type} size="small"/>
            <ContentBox type={props.type} size="small"/>
        </div>
    );
};

export default SlideShow;
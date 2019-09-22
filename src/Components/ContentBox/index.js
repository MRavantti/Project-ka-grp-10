import React from 'react';
import './style.css';
import Thumbnail from '../Thumbnail';
import TextContainer from '../TextContainer';

const ContentBox = (props) => {
    return (
        <div className={`content-box ${props.size}`}>
            <Thumbnail  type={props.type} size={props.size}/>
            <TextContainer type={props.type} size={props.size} info={props.info}/>
        </div>
    );
};

export default ContentBox;
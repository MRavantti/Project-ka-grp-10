import React from 'react';
import './style.css';
import Thumbnail from '../Thumbnail';
import TextContainer from '../TextContainer';

const ContentBox = (props) => {
	const { content } = props;
	
    return (
        <div className={`content-box ${props.size}`}>
            <Thumbnail  type={content.type} size={props.size} content={content}/>
            <TextContainer type={content.type} size={props.size} content={content}/>
        </div>
    );
};

export default ContentBox;
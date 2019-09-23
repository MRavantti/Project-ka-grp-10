import React from 'react';
import './style.css';
import Thumbnail from '../Thumbnail';
import TextContainer from '../TextContainer';

const ContentBox = (props) => {
    return (
        <div className={`content-box ${props.size}`}>
            <Thumbnail type={props.type} size={props.size} date={props.date} img={props.img} />
            <TextContainer type={props.type} size={props.size} info={props.info} header={props.header} text={props.text} info={props.info} />
        </div>
    );
};

export default ContentBox;
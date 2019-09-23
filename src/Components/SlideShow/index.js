import React from 'react';
import './style.css';
import ContentBox from '../ContentBox';

const SlideShow = (props) => {
    return (
        <div className="carousel">
            <ContentBox type={props.type} size="small" img={props.img} header={props.header} text={props.text} />
            <ContentBox type={props.type} size="small" img={props.img} header={props.header} text={props.text} />
            <ContentBox type={props.type} size="small" img={props.img} header={props.header} text={props.text} />
            <ContentBox type={props.type} size="small" img={props.img} header={props.header} text={props.text} />
            <ContentBox type={props.type} size="small" img={props.img} header={props.header} text={props.text} />
        </div>
    );
};

export default SlideShow;
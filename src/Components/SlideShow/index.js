import React from 'react';
import './style.css';
import ContentBox from '../ContentBox';

const SlideShow = (props) => {
    return (
        <div className="carousel">
            <ContentBox
                type={props.type}
                size={props.size}
                img={props.img}
                header={props.headerOne}
                text={props.textOne}
            />
            <ContentBox
                type={props.type}
                size={props.size}
                img={props.img}
                header={props.headerTwo}
                text={props.textTwo}
            />
            <ContentBox
                type={props.type}
                size={props.size}
                img={props.img}
                header={props.headerThree}
                text={props.textThree}
            />
            <ContentBox
                type={props.type}
                size={props.size}
                img={props.img}
                header={props.headerFour}
                text={props.textFour}
            />
            <ContentBox
                type={props.type}
                size={props.size}
                img={props.img}
                header={props.headerFive}
                text={props.textFive}
            />
        </div>
    );
};

export default SlideShow;
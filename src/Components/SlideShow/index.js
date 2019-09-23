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
                date={props.dateOne}
            />
            <ContentBox
                type={props.type}
                size={props.size}
                img={props.img}
                header={props.headerTwo}
                text={props.textTwo}
                date={props.dateTwo}
            />
            <ContentBox
                type={props.type}
                size={props.size}
                img={props.img}
                header={props.headerThree}
                text={props.textThree}
                date={props.dateThree}
            />
            <ContentBox
                type={props.type}
                size={props.size}
                img={props.img}
                header={props.headerFour}
                text={props.textFour}
                date={props.dateFour}
            />
            <ContentBox
                type={props.type}
                size={props.size}
                img={props.img}
                header={props.headerFive}
                text={props.textFive}
                date={props.dateFive}
            />
        </div>
    );
};

export default SlideShow;
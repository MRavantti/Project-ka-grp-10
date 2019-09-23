import React, { useState, Fragment } from 'react';
import './style.css';

import SeeMore from '../SeeMore';
import ContentBox from '../ContentBox';
import SlideShow from '../SlideShow';

const ContentContainer = (props) => {

    const [showMore, setShowMore] = useState(false);

    const func = () => {
        setShowMore(!showMore);
        console.log('hello');
    }

    if (props.size === "small") {
        return (
            <div className="content-container">
                <SeeMore title={props.title} toggle={func}/>
                <SlideShow type={props.type} img={props.img} />
                {
                    showMore && 
                    <Fragment>
                        <SlideShow type={props.type} img={props.img} />
                        <SlideShow type={props.type} img={props.img} />
                    </Fragment>
                }
            </div>
        )
    }

    return (
        <div className="content-container">
            <SeeMore title={props.title} toggle={func}/>
            <ContentBox size={props.size} type={props.type} info={props.info} date={props.date} header={props.header} text={props.text} info={props.info} img={props.img} />
        </div>
    );
};

export default ContentContainer;
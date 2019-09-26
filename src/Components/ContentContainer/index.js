import React, { useState, Fragment } from 'react';
import './style.css';

import SeeMore from '../SeeMore';
import ContentBox from '../ContentBox';
import SlideShow from '../SlideShow';

const ContentContainer = (props) => {

    const [showMore, setShowMore] = useState(false);

    const func = () => {
        setShowMore(!showMore);
    }

    if (props.size === "small") {
        return (
            <div className="content-container">
                <SeeMore text={props.text} toggle={func}/>
                <SlideShow type={props.type} content={props.content.slice(0, 5)}/>
                {
                    showMore &&
                    <Fragment>
                        <SlideShow type={props.type} content={props.content.slice(5, 10)}/>
                        <SlideShow type={props.type} content={props.content.slice(10, 15)}/>
                    </Fragment>
                }
            </div>
        )
    }

    return (
        <div className="content-container">
            <SeeMore text="Senast Innehåll"/>
            <ContentBox size={props.size} content={props.content} image={props.image}/>
        </div>
    );
};

export default ContentContainer;
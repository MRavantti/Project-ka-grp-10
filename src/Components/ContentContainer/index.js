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
                <SeeMore title={props.title} toggle={func} />
                <SlideShow
                    type={props.type}
                    img={props.img}
                    size={props.size}

                    headerOne={props.headerOne}
                    textOne={props.textOne}

                    headerTwo={props.headerTwo}
                    textTwo={props.textTwo}

                    headerThree={props.headerThree}
                    textThree={props.textThree}

                    headerFour={props.headerFour}
                    textFour={props.textFour}

                    headerFive={props.headerFive}
                    textFive={props.textFive}
                />
                {
                    showMore &&
                    <Fragment>
                        <SlideShow
                            type={props.type}
                            img={props.img}
                            size={props.size}

                            headerOne={props.headerSix}
                            textOne={props.textSix}

                            headerTwo={props.headerSeven}
                            textTwo={props.textSeven}

                            headerThree={props.headerEight}
                            textThree={props.textEight}

                            headerFour={props.headerNine}
                            textFour={props.textNine}

                            headerFive={props.headerTen}
                            textFive={props.textTen}
                        />
                        <SlideShow
                            type={props.type}
                            img={props.img}
                            size={props.size}

                            headerOne={props.headerEleven}
                            textOne={props.textEleven}

                            headerTwo={props.headerTwelve}
                            textTwo={props.textTwelve}

                            headerThree={props.headerThirteen}
                            textThree={props.textThirteen}

                            headerFour={props.headerFourteen}
                            textFour={props.textFourteen}
                            
                            headerFive={props.headerFifteen}
                            textFive={props.textFifteen}
                        />
                    </Fragment>
                }
            </div>
        )
    }

    return (
        <div className="content-container">
            <SeeMore title={props.title} toggle={func} />
            <ContentBox size={props.size} type={props.type} info={props.info} date={props.date} header={props.header} text={props.text} info={props.info} img={props.img} />
        </div>
    );
};

export default ContentContainer;
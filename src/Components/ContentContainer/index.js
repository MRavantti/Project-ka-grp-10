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
                    dateOne={props.dateOne}

                    headerTwo={props.headerTwo}
                    textTwo={props.textTwo}
                    dateTwo={props.dateTwo}

                    headerThree={props.headerThree}
                    textThree={props.textThree}
                    dateThree={props.dateThree}

                    headerFour={props.headerFour}
                    textFour={props.textFour}
                    dateFour={props.dateFour}

                    headerFive={props.headerFive}
                    textFive={props.textFive}
                    dateFive={props.dateFive}
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
                            dateOne={props.dateSix}

                            headerTwo={props.headerSeven}
                            textTwo={props.textSeven}
                            dateTwo={props.dateSeven}

                            headerThree={props.headerEight}
                            textThree={props.textEight}
                            dateThree={props.dateEight}

                            headerFour={props.headerNine}
                            textFour={props.textNine}
                            dateFour={props.dateNine}

                            headerFive={props.headerTen}
                            textFive={props.textTen}
                            dateFive={props.dateTen}
                        />
                        <SlideShow
                            type={props.type}
                            img={props.img}
                            size={props.size}

                            headerOne={props.headerEleven}
                            textOne={props.textEleven}
                            dateOne={props.dateEleven}


                            headerTwo={props.headerTwelve}
                            textTwo={props.textTwelve}
                            dateTwo={props.dateTwelve}

                            headerThree={props.headerThirteen}
                            textThree={props.textThirteen}
                            dateThree={props.dateThirteen}

                            headerFour={props.headerFourteen}
                            textFour={props.textFourteen}
                            dateFour={props.dateFourteen}
                            
                            headerFive={props.headerFifteen}
                            textFive={props.textFifteen}
                            dateFive={props.dateFifteen}
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
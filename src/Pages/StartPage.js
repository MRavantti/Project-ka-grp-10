import React, { Fragment } from 'react';
import ContentBox from '../Components/ContentBox';
import CategoryMenu from '../Components/CategoryMenu';
import Header from '../Components/Header';
import SeeMore from '../Components/SeeMore';
import SlideShow from '../Components/SlideShow';
import ContentContainer from '../Components/ContentContainer';

import PodcastImg from '../Images/Inläggsruta-Bild.png'
import VideoLectureImg from '../Images/den-blomstertidnukommer.png'

const StartPage = () => {
    return (
        <Fragment>
            <CategoryMenu />
            <Header />
            <ContentContainer
                size="large"
                type="video"
                title="Senast Innehåll"
                info="Videoföreläsning"
                img={VideoLectureImg}
                header="Den Blomstertid Nu Kommer - Ett halvår senare"
                text="Olle Tholén från filmkollektivet Crazy Pictures ser tillbaka på det kollektiva arbetet med den första långfilmen."
            />
            <ContentContainer
                size="small"
                type="video"
                title="Populära Videoföreläsningar"
                img="https://i.ytimg.com/vi/qvWzFtNPbB4/default.jpg"
            />
            <ContentContainer
                size="large"
                type="sound"
                title="Nya Podcastavsnitt"
                info="Podcast-avsnitt"
                img={PodcastImg}
                header="Hjälte För Hur Länge?"
                text="Scensverige vimlar av ersättare. Vad innebär det i praktiken att göra ett inhopp – för mig som skådespelare, för föreställningen och för publiken?"
            />
            <ContentContainer
                size="small"
                type="sound"
                title="Populära Podcasts"
                img="https://i.ytimg.com/vi/qvWzFtNPbB4/default.jpg"
            />
        </Fragment>
    );
};

export default StartPage;
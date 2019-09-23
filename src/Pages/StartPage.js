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

                headerOne="Netflix Ambitions"
                textOne="Netflix’s Lina Bronéus on the plans for the Nordic regions."

                headerTwo="Jon Plowman"
                textTwo="How to create good comedy and why we need less drama."

                headerThree="Stråf Vocal Strings"
                textThree="Att spela för en ung publik."

                headerFour="title 4"
                textFour="lorem ipsum"

                headerFive="title 5"
                textFive="lorem ipsum"

                headerSix="title 6"
                textSix="lorem ipsum"

                headerSeven="title 7"
                textSeven="lorem ipsum"

                headerEight="title 8"
                textEight="lorem ipsum"

                headerNine="title 9"
                textNine="lorem ipsum"

                headerTen="title 10"
                textTen="lorem ipsum"

                headerEleven="title 11"
                textEleven="lorem ipsum"

                headerTwelve="title 12"
                textTwelve="lorem ipsum"

                headerThirteen="title 13"
                textThirteen="lorem ipsum"

                headerFourteen="title 14"
                textFourteen="lorem ipsum"

                headerFifteen="title 15"
                textFifteen="lorem ipsum"
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

                headerOne="Fading Lights"
                textOne="Netflix’s Lina Bronéus on the plans for the Nordic regions."

                headerTwo="#123 SFI & Film i Väst"
                textTwo="How to create good comedy and why we need less drama."

                headerThree="Danslyftet"
                textThree="Att spela för en ung publik."

                headerFour="title 4"
                textFour="lorem ipsum"

                headerFive="title 5"
                textFive="lorem ipsum"

                headerSix="title 6"
                textSix="lorem ipsum"

                headerSeven="title 7"
                textSeven="lorem ipsum"

                headerEight="title 8"
                textEight="lorem ipsum"

                headerNine="title 9"
                textNine="lorem ipsum"

                headerTen="title 10"
                textTen="lorem ipsum"

                headerEleven="title 11"
                textEleven="lorem ipsum"

                headerTwelve="title 12"
                textTwelve="lorem ipsum"

                headerThirteen="title 13"
                textThirteen="lorem ipsum"

                headerFourteen="title 14"
                textFourteen="lorem ipsum"

                headerFifteen="title 15"
                textFifteen="lorem ipsum"
            />
        </Fragment>
    );
};

export default StartPage;
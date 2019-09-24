import React, { Fragment } from 'react';
import ContentBox from '../Components/ContentBox';
import CategoryMenu from '../Components/CategoryMenu';
import Header from '../Components/Header';
import SeeMore from '../Components/SeeMore';
import SlideShow from '../Components/SlideShow';
import ContentContainer from '../Components/ContentContainer';

import videos from '../data/youtube';
import podcasts from '../data/soundcloud';

const StartPage = () => {
    return (
        <Fragment>
            <CategoryMenu/>
            <Header content={videos[20]}/>
            <ContentContainer size="large" text="Senast Innehåll" content={videos[0]}/>
            <ContentContainer size="small" type="video" text="Populära Videoföreläsningar" content={videos.slice(1, 16)}/>
            <ContentContainer size="large" type="sound" text="Nytt Podcastavsnitt" info="Podcast-avsnitt" content={podcasts[0]}/>
            <ContentContainer size="small" type="sound" text="Populära Podcasts" content={podcasts.slice(1, 16)}/>
        </Fragment>
    );
};

export default StartPage;
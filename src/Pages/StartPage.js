import React, { Fragment } from 'react';
import ContentBox from '../Components/ContentBox';
import CategoryMenu from '../Components/CategoryMenu';
import Hero from '../Components/Hero';
import SeeMore from '../Components/SeeMore';
import SlideShow from '../Components/SlideShow';
import ContentContainer from '../Components/ContentContainer';

import videos from '../data/youtube';
import podcasts from '../data/soundcloud';

const StartPage = () => {
    return (
        <Fragment>
            <CategoryMenu/>
            <Hero content={videos[20]}/>
            <ContentContainer size="large" text="Senast Innehåll" content={videos[0]} image="/assets/images/talking-man.jpg"/>
            <ContentContainer size="small" text="Populära Videoföreläsningar" content={videos.slice(1, 16)}/>
            <ContentContainer size="large" text="Nytt Podcastavsnitt" info="Podcast-avsnitt" content={podcasts[0]} image="/assets/images/talking-woman.jpg"/>
            <ContentContainer size="small" text="Populära Podcasts" content={podcasts.slice(1, 16)}/>
        </Fragment>
    );
};

export default StartPage;
import React, { Fragment } from 'react';
import ContentBox from '../Components/ContentBox';
import CategoryMenu from '../Components/CategoryMenu';
import Header from '../Components/Header';
import SeeMore from '../Components/SeeMore';
import SlideShow from '../Components/SlideShow';
import ContentContainer from '../Components/ContentContainer';


const StartPage = () => {
    return (
        <Fragment>
            <CategoryMenu/>
            <Header/>
            <ContentContainer size="large" type="video" text="Senast Innehåll" info="Videoföreläsning"/>
            <ContentContainer size="small" type="video" text="Populära Videoföreläsningar"/>
            <ContentContainer size="large" type="sound" text="Nya Podcastavsnitt" info="Podcast-avsnitt"/>
            <ContentContainer size="small" type="sound" text="Populära Podcasts"/>
        </Fragment>
    );
};

export default StartPage;
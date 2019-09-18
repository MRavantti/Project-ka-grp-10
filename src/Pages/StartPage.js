import React, { Fragment } from 'react';
import ContentBox from '../Components/ContentBox';
import CategoryMenu from '../Components/CategoryMenu';
import Header from '../Components/Header';
import SeeMore from '../Components/SeeMore';
import SlideShow from '../Components/SlideShow';


const StartPage = () => {
    return (
        <Fragment>
            <CategoryMenu/>
            <Header/>
            <SeeMore text="Senast Innehåll"/>
            <ContentBox size="large" type="video" info="Videoföreläsning"/>
            <SeeMore text="Populära Videoföreläsningar"/>
            <SlideShow type="video"/>
            <SeeMore text="Nya Podcastavsnitt"/>
            <ContentBox size="large" type="sound" info="Podcast-avsnitt"/>
            <SeeMore text="Populära Podcasts"/>
            <SlideShow type="sound"/>
        </Fragment>
    );
};

export default StartPage;
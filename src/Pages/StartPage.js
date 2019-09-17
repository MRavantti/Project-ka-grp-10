import React from 'react';
import Thumbnail from '../Components/Thumbnail';
import CategoryMenu from '../Components/CategoryMenu';
import Header from '../Components/Header';
import SeeMore from '../Components/SeeMore';
import SlideShow from '../Components/SlideShow';


const StartPage = () => {
    return (
        <div>
            <CategoryMenu/>
            <Header/>
            <SeeMore text="Senast Innehåll"/>
            <Thumbnail size="large" type="video"/>
            <SeeMore text="Populära Videoföreläsningar"/>
            <SlideShow/>
            <SeeMore text="Nya Podcastavsnitt"/>
            <Thumbnail size="large" type="sound"/>
        </div>
    );
};

export default StartPage;
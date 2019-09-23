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
            <ContentContainer size="large" type="video" title="Senast Innehåll" info="Videoföreläsning" img="https://i.ytimg.com/vi/qvWzFtNPbB4/default.jpg"/>
            <ContentContainer size="small" type="video" title="Populära Videoföreläsningar" img="https://i.ytimg.com/vi/qvWzFtNPbB4/default.jpg" />
            <ContentContainer size="large" type="sound" title="Nya Podcastavsnitt" info="Podcast-avsnitt" img="https://i.ytimg.com/vi/qvWzFtNPbB4/default.jpg" />
            <ContentContainer size="small" type="sound" title="Populära Podcasts" img="https://i.ytimg.com/vi/qvWzFtNPbB4/default.jpg" />
        </Fragment>
    );
};

export default StartPage;
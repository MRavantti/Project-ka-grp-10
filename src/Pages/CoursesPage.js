import React, { Fragment } from 'react';
import CoursesPageHero from '../Components/CoursesPageHero';
import ContentContainer from '../Components/ContentContainer'
import Button from '../Components/Button'
import videos from '../data/youtube.json';


const CoursesPage = (props) => {

    return (
        <Fragment>
            <CoursesPageHero />
            <ContentContainer size="large" text="Senast Innehåll" content={videos[0]} />
            <ContentContainer size="small" type="video" text="Populära Videoföreläsningar" content={videos.slice(1, 16)} />            
            <ContentContainer size="small" type="video" text="Populära Videoföreläsningar" content={videos.slice(1, 16)} />            

        </Fragment>
    );
};

export default CoursesPage;
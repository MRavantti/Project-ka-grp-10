import React, { Fragment } from 'react';
import CoursesPageHero from '../Components/CoursesPageHero';
import ContentContainer from '../Components/ContentContainer'
import Button from '../Components/Button'
import CurrentCourses from '../Images/art&business.png'

const CoursesPage = (props) => {

    const category = props.match.params.categoryId;
    console.log(props.location.state);

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
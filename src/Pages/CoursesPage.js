import React, { Fragment } from 'react';
import CoursesPageHero from '../Components/CoursesPageHero';
import ContentContainer from '../Components/ContentContainer'

import CurrentCourses from '../Images/art&business.png'

const CoursesPage = (props) => {

    const category = props.match.params.categoryId;
    console.log(props.location.state);

    return (
        <Fragment>
            <CoursesPageHero />
            <ContentContainer title="Aktuella kurser" img={CurrentCourses} size="large" type="course" date="6 nov"/>
        </Fragment>
    );
};

export default CoursesPage;
import React, { Fragment } from 'react';
import CoursesPageHero from '../Components/CoursesPageHero';

const CoursesPage = (props) => {

    const category = props.match.params.categoryId;
    console.log(props.location.state);

    return (
        <Fragment>
            <CoursesPageHero />
        </Fragment>
    );
};

export default CoursesPage;
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
            <ContentContainer
                title="Aktuella kurser"
                img={CurrentCourses} size="large"
                type="course"
                date="6 nov"
                header="Art and business"
                text="En satsning för att öka kunskapen om företagande hos kreatörer och konstnärer."
                courseType="Workshop"
            />
            <div className="read-more-button">
                <Button text="Läs mer & ansök" />
            </div>

        </Fragment>
    );
};

export default CoursesPage;
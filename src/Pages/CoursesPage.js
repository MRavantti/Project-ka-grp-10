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
                size="large"
                type="course"
                title="Aktuella kurser"
                img={CurrentCourses}
                date="6 nov"
                header="Art and business"
                text="En satsning för att öka kunskapen om företagande hos kreatörer och konstnärer."
                info="Workshop"
            />
            <div className="read-more-button">
                <Button text="Läs mer & ansök" />
            </div>
            <ContentContainer
                size="small"
                type="course"
                title="Seminarier"
                img="https://i.ytimg.com/vi/qvWzFtNPbB4/default.jpg"

                headerOne="Immersiv scenkonst"
                textOne="Del 1"
                dateOne="7 okt"

                headerTwo="Immersiv scenkonst"
                textTwo="Del 2"
                dateTwo="18 nov"

                headerThree="Text titel om B"
                textThree="Lorem ipsum copysum dolor set amet."
                dateThree="18 nov"

                headerFour="title 4"
                textFour="lorem ipsum"
                dateFour="18 nov"

                headerFive="title 5"
                textFive="lorem ipsum"
                dateFive="18 nov"

                headerSix="title 6"
                textSix="lorem ipsum"
                dateSix="18 nov"

                headerSeven="title 7"
                textSeven="lorem ipsum"
                dateSeven="18 nov"

                headerEight="title 8"
                textEight="lorem ipsum"
                dateEight="18 nov"

                headerNine="title 9"
                textNine="lorem ipsum"
                dateNine="18 nov"

                headerTen="title 10"
                textTen="lorem ipsum"
                dateTen="18 nov"

                headerEleven="title 11"
                textEleven="lorem ipsum"
                dateEleven="18 nov"

                headerTwelve="title 12"
                textTwelve="lorem ipsum"
                dateTwelve="18 nov"

                headerThirteen="title 13"
                textThirteen="lorem ipsum"
                dateThirteen="18 nov"

                headerFourteen="title 14"
                textFourteen="lorem ipsum"
                dateFourteen="18 nov"

                headerFifteen="title 15"
                textFifteen="lorem ipsum"
                dateFifteen="18 nov"
            />

            <ContentContainer
                size="small"
                type="course"
                title="Seminarier"
                img="https://i.ytimg.com/vi/qvWzFtNPbB4/default.jpg"

                headerOne="Action based choreography"
                textOne="Del 1"
                dateOne="7 okt"

                headerTwo="Behåll rätt medarbetare"
                textTwo="Del 2"
                dateTwo="18 nov"

                headerThree="Text titel om B"
                textThree="Lorem ipsum copysum dolor set amet."
                dateThree="18 nov"

                headerFour="title 4"
                textFour="lorem ipsum"
                dateFour="18 nov"

                headerFive="title 5"
                textFive="lorem ipsum"
                dateFive="18 nov"

                headerSix="title 6"
                textSix="lorem ipsum"
                dateSix="18 nov"

                headerSeven="title 7"
                textSeven="lorem ipsum"
                dateSeven="18 nov"

                headerEight="title 8"
                textEight="lorem ipsum"
                dateEight="18 nov"

                headerNine="title 9"
                textNine="lorem ipsum"
                dateNine="18 nov"

                headerTen="title 10"
                textTen="lorem ipsum"
                dateTen="18 nov"

                headerEleven="title 11"
                textEleven="lorem ipsum"
                dateEleven="18 nov"

                headerTwelve="title 12"
                textTwelve="lorem ipsum"
                dateTwelve="18 nov"

                headerThirteen="title 13"
                textThirteen="lorem ipsum"
                dateThirteen="18 nov"

                headerFourteen="title 14"
                textFourteen="lorem ipsum"
                dateFourteen="18 nov"

                headerFifteen="title 15"
                textFifteen="lorem ipsum"
                dateFifteen="18 nov"
            />

        </Fragment>
    );
};

export default CoursesPage;
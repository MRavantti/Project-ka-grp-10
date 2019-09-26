import React, { Component, Fragment } from 'react';
import './style.css'

import CourseBox from '../Components/CourseBox';
import BackArrow from '../Components/BackArrow';


const RelatedPage = (props) => {
    return (
        <Fragment>
			<BackArrow/>
            <div className="course-leader">
                <h3>Pia Olby</h3>
                <p>Kurser & föreläsningar</p>
            </div>
            <div>
                <CourseBox 
                courseName="Sånggestaltning" 
                courseExcerpt="Den här kursen i sånggestaltning erbjuder professionella skådespelare möjlighet att arbeta med och utveckla sin egen vokala och musikaliska potential - och att utmana sig själva sångmässigt lokjahdkhadhjkahkdhkahjdhajkdhakj."
                />
                <CourseBox
                    courseName="Kursnamn B"
                    courseExcerpt="Den här kursen i sånggestaltning erbjuder professionella skådespelare möjlighet att arbeta med och utveckla sin egen vokala och musikaliska potential - och att utmana sig själva sångmässigt lokjahdkhadhjkahkdhkahjdhajkdhakj."
                />
                <CourseBox
                    courseName="Kursnamn C"
                    courseExcerpt="Den här kursen i sånggestaltning erbjuder professionella skådespelare möjlighet att arbeta med och utveckla sin egen vokala och musikaliska potential - och att utmana sig själva sångmässigt lokjahdkhadhjkahkdhkahjdhajkdhakj."
                />
            </div>
        </Fragment>
    )
}

export default RelatedPage;
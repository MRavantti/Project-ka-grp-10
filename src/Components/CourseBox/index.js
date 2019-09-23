import React from 'react';
import './CourseBox.css'
import Button from '../Button';

const CourseBox = (props) => {
    return (
        <div className="course-box">
            <h3 className="course-name">{props.courseName}</h3>
            <p className="course-excerpt">{props.courseExcerpt}</p>
            <div className="read-more-button">
            <Button text="Läs mer och ansök" />
            </div>
        </div>
    );
};

export default CourseBox;
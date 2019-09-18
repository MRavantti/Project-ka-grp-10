import React from 'react';
import './style.css';
import Button from '../Button';

const CoursesBox = () => {
    return (
        <div className="courses-box">
            <p>Uppskattar du vårt innehåll?</p>
            <p>Vi har kurser och föredrag inom samtliga ämnen du kan 
                lära dig mer om under varje kopplad video eller podcast.</p>
            <Button text="Kurser & föreläsningar"/>
        </div>
    );
};

export default CoursesBox;
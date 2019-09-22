import React, { Component, Fragment } from 'react';
import './style.css'

import BackButton from '../Components/BackButton';
import BackButtonImage from '../Images/back-button.svg'


const RelatedPage = (props) => {
    return (
        <Fragment>
            <BackButton img={BackButtonImage} />
            <div className="course-leader">
                <h3>Pia Olby</h3>
                <p>Kurser & föreläsningar</p>
            </div>
        </Fragment>
    )
}

export default RelatedPage;
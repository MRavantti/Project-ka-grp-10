import React, { Component, Fragment } from 'react';
import './FinalizeRegistration.css';

import CheckedCircle from '../../Images/checked-circle.svg'

const FinalizeRegistration = () => {
    return (
        < Fragment >
            <div className="finalize-registration">
                <img className="big-checked-circle" src={CheckedCircle} />
                <h1>Klart!</h1>
            </div>
        </Fragment >
    )
}

export default FinalizeRegistration;
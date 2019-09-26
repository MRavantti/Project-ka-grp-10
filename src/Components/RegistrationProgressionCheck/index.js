import React, { Fragment } from 'react';
import './RegistrationProgressionCheck.css';

import UncheckedCircle from '../../Images/unchecked-circle.svg';
import CheckedCircle from '../../Images/checked-circle.svg'

const RegistrationProgressionCheck = (props) => {
    return (

        <Fragment>
            <div className="progression-bar">
                <div style={{ height: "24px", width: "24px", backgroundImage: `url(${CheckedCircle})` }} />
                <div className="progression-line" />
                <div style={{ height: "24px", width: "24px", backgroundImage: `url(${UncheckedCircle})` }} />
                <div className="progression-line" />
                <div style={{ height: "24px", width: "24px", backgroundImage: `url(${UncheckedCircle})` }} />
            </div>
        </Fragment>
    )
}

export default RegistrationProgressionCheck;
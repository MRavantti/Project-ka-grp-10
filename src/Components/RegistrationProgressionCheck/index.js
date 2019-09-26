import React, { Component, Fragment } from 'react';
import './RegistrationProgressionCheck.css';

import UncheckedCircle from '../../Images/unchecked-circle.svg';
import CheckedCircle from '../../Images/checked-circle.svg'

class RegistrationProgressionCheck extends Component {
    render() {
        return (

            < Fragment >
                <div className="progression-bar">
                    <div style={{ height: "24px", width: "24px", backgroundImage: `url(${CheckedCircle})` }} />
                    <div className="progression-line" />
                    {
                        this.props.state === "2" || this.props.state === "3"
                            ? <div style={{ height: "24px", width: "24px", backgroundImage: `url(${CheckedCircle})` }} />
                            : <div style={{ height: "24px", width: "24px", backgroundImage: `url(${UncheckedCircle})` }} />
                    }
                    
                    <div className="progression-line" />
                    {
                        this.props.state === "3"
                            ? <div style={{ height: "24px", width: "24px", backgroundImage: `url(${CheckedCircle})` }} />
                            : <div style={{ height: "24px", width: "24px", backgroundImage: `url(${UncheckedCircle})` }} />
                    }
                </div>
            </Fragment >
        )
    }
}

export default RegistrationProgressionCheck;
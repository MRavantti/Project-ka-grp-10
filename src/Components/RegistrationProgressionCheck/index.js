import React, { Component, Fragment } from 'react';
import './RegistrationProgressionCheck.css';

class RegistrationProgressionCheck extends Component {
    render() {
        return (

            < Fragment >
                <div className="progression-bar">
                    <div style={{ height: "24px", width: "24px", backgroundImage: `url(/assets/svgs/checked-circle.svg)` }} />
                    <div className="progression-line" />
                    {
                        this.props.state === "2" || this.props.state === "3"
                            ? <div style={{ height: "24px", width: "24px", backgroundImage: `url(/assets/svgs/checked-circle.svg)` }} />
                            : <div style={{ height: "24px", width: "24px", backgroundImage: `url(/assets/svgs/unchecked-circle.svg)` }} />
                    }
                    
                    <div className="progression-line" />
                    {
                        this.props.state === "3"
                            ? <div style={{ height: "24px", width: "24px", backgroundImage: `url(/assets/svgs/checked-circle.svg)` }} />
                            : <div style={{ height: "24px", width: "24px", backgroundImage: `url(/assets/svgs/unchecked-circle.svg)` }} />
                    }
                </div>
            </Fragment >
        )
    }
}

export default RegistrationProgressionCheck;
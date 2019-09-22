import React, { Fragment } from 'react';
import './style.css';
import Button from '../Button';

const ProfileInfo = (props) => {
    return (
        <Fragment>
            <div className="profile-info">
                <img src="/assets/images/pia-olby.jpg" alt="profile"/>
                <div className="profile-text">
                    <h5>Kursledare</h5>
                    <div>
                        <h3>Pia Olby</h3>
                        <p>Sångpedagog</p>
                    </div>
                </div>
            </div>
            <div className="profile-buttons">
                <Button text="Videoföreläsningar"/>
                <Button text="Kurser & seminarier"/>
            </div>
            <div className="toggle">
                <img src="/assets/svgs/up-arrow.svg" alt="arrow up icon" onClick={props.toggle}/>
            </div>
        </Fragment>
    );
};

export default ProfileInfo;
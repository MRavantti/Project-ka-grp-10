import React, { Fragment } from 'react';
import './UserProfileInfo.css';
import Button from '../Button';
import EditButton from '../EditButton';
import ProfileImg from '../../Images/elsa-johansson.png'

const UserProfileInfo = (props) => {
    return (
        <Fragment>
            <div className="profile">
                <div className="profile-info">
                    <img src={ProfileImg} alt="profile" />
                    <div className="profile-text">
                        <div>
                            <h3>Elsa Johansson</h3>
                            <p>Scenarbetare</p>
                        </div>
                    </div>
                </div>
                <EditButton />
            </div>
        </Fragment>
    );
};

export default UserProfileInfo;
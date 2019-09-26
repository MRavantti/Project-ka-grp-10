import React, { Fragment } from 'react';
import './UserProfileInfo.css';
import EditButton from '../EditButton';

const UserProfileInfo = (props) => {
    return (
        <Fragment>
            <div className="profile">
                <div className="profile-info">
                    <img src="/assets/svgs/elsa-johansson.svg" alt="profile" />
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
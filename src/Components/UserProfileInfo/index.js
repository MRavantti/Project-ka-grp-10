import React, { Fragment } from 'react';
import './UserProfileInfo.css';
import EditButton from '../EditButton';

const UserProfileInfo = ({teacher}) => {
    return (
        <Fragment>
            <div className="profile">
                <div className="profile-info">
                    <img src={`/assets/svgs/${teacher ? "pia-olby" : "elsa-johansson"}.svg`} alt="profile" />
                    <div className="profile-text">
                        <div>
                            <h3>{teacher ? "Pia Olby" : "Elsa Johansson"}</h3>
                            <p>{teacher ? "Sångpedagog" : "Scenarbetare"}</p>
                        </div>
                    </div>
                </div>
                <EditButton />
            </div>
        </Fragment>
    );
};

export default UserProfileInfo;
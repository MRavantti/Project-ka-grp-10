import React from 'react';
import './style.css';
import InfoBox from '../InfoBox';
import ProfileInfo from '../ProfileInfo';

const ToggleProfile = (props) => {
    return (
        <div className="toggle-profile">
            <InfoBox/>
            <ProfileInfo toggle={props.toggle}/>
        </div>
    );
};

export default ToggleProfile;
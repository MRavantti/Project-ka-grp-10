import React, { Fragment } from 'react';
import BackArrow from '../Components/BackArrow';
import UserProfileInfo from '../Components/UserProfileInfo';
import videos from '../data/youtube.json';
import ContentContainer from '../Components/ContentContainer'

const ProfilePage = (props) => {
    return (
        <Fragment>
            <BackArrow transparent={false} />
            <div className="profile-top">
                <h3 className="user-profile-header">Min Profil</h3>
                <UserProfileInfo />
            </div>

            <div className="line" />

            <ContentContainer size="small" type="course" text="Mina kurser" content={videos.slice(1, 16)} />

            <div className="line" />

            <ContentContainer size="small" type="course" text="Fortsätt titta" content={videos.slice(1, 16)} />
            <ContentContainer size="small" type="course" text="Sparade favoriter" content={videos.slice(1, 16)} />
            <ContentContainer size="small" type="course" text="Föreslaget innehåll" content={videos.slice(1, 16)} />
        </Fragment>
    );
};

export default ProfilePage;
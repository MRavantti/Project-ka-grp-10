import React, { Fragment, useContext } from 'react';
import BackArrow from '../Components/BackArrow';
import UserProfileInfo from '../Components/UserProfileInfo';
import videos from '../data/youtube.json';
import podcasts from '../data/soundcloud.json';
import ContentContainer from '../Components/ContentContainer';
import { Redirect } from 'react-router-dom';
import { LoggedInContext } from '../contexts/LoggedInContext';

const ProfilePage = (props) => {
	props.match.params.type && console.log(props.match.params.type);
	

    const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);

    return (
        <Fragment>
            {
				props.match.params.type === "teacher" ?
				<Fragment>
					<BackArrow transparent={false} />
					<div className="profile-top">
						<h3 className="user-profile-header">Föreläsare</h3>
						<UserProfileInfo teacher={true}/>
					</div>

					<div className="line" />

					<ContentContainer size="small" type="course" text="Pia Olby's Föreläsningar" content={videos.slice(1, 16)} />
					<ContentContainer size="small" type="course" text="Föreslaget innehåll" content={podcasts.slice(60, 75)} />
				</Fragment>
                : isLoggedIn
                    ? <Fragment>
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

					: <Redirect to="/login" />
            }
        </Fragment>
    );
};

export default ProfilePage;
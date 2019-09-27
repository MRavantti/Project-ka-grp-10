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
				{!teacher && <EditButton />}
            </div>
				{teacher &&
					<div className="teacher-info">
						<div className="social-media">
							<img src="/assets/svgs/youtube.svg" alt="youtube"/>
							<p>Youtube</p>
							<img src="/assets/svgs/website.svg" alt="hemsida"/>
							<p>Hemsida</p>
						</div>
						<p>Pia Olby är sångare, musiker och pedagog sedan slutet av 1970-talet och har mest arbetat som sångare inom 
							musikgenrer där improvisation ingår som ett huvudsakligt begrepp såsom jazz och fri improvisation.</p>
					</div>
				}
        </Fragment>
    );
};

export default UserProfileInfo;
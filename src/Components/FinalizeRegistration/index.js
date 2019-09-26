import React, { Component, Fragment, useContext } from 'react';
import './FinalizeRegistration.css';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { Link } from 'react-router-dom';


const FinalizeRegistration = () => {

	const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);

	setIsLoggedIn(true);
	
    return (
        <Fragment>
            <div className="finalize-registration">
				<div>
					<img className="big-checked-circle" src="/assets/svgs/checked-circle.svg" />
					<h1>Klart!</h1>
				</div>
				<Link to="/profile" className="go-to-profile">
					<div>
						<p>Fortsätt till din profil</p>
						<img src="/assets/svgs/forward-arrow.svg" />
					</div>
				</Link>
            </div>

        </Fragment >
    )
}

export default FinalizeRegistration;
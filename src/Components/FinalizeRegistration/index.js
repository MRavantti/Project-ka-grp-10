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
                <img className="big-checked-circle" src="/assets/svgs/checked-circle.svg" />
                <h1>Klart!</h1>
            </div>

			{/* EXEMPEL */}
			<Link to="/profile">Fortsätt till profil</Link>
			{/* EXEMPEL */}
        </Fragment >
    )
}

export default FinalizeRegistration;
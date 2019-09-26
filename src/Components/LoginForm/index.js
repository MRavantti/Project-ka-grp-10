import React, { Fragment, useContext } from 'react';
import './LoginForm.css';
import { Redirect } from 'react-router-dom';
import { LoggedInContext } from '../../contexts/LoggedInContext';

const LoginForm = (props) => {

	const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);

	const submitFunc = (e) => {
		e.preventDefault();
		setIsLoggedIn(true);
	}

    return (
        <Fragment>
            <h3 className="login-welcome">Logga in på K-Play</h3>
            <form className="login-form" onSubmit={submitFunc}>
                <div className="input-field">
                    <div className="icon">
                        <img src="/assets/svgs/email-icon.svg" />
                    </div>
                    <input className="input-login" type="text" name="email" placeholder="E-Mail" />
                </div>

                <div className="input-field">
                    <div className="icon">
                        <img src="/assets/svgs/key-icon.svg" />
                    </div>
                    <input className="input-login" type="password" name="password" placeholder="Lösenord" />
                </div>
                <input className="login-button" type="submit" name="submit" value="logga in"/>
            </form>
			{isLoggedIn && <Redirect to="/profile"/>}
        </Fragment>
    );
};

export default LoginForm;
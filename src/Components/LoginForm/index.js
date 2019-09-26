import React, { Fragment } from 'react';
import './LoginForm.css';

const LoginForm = (props) => {
    return (
        <Fragment>
            <h3 className="login-welcome">Logga in på K-Play</h3>
            <form className="login-form" >
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
        </Fragment>
    );
};

export default LoginForm;
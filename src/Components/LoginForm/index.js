import React, { Fragment } from 'react';
import './LoginForm.css';
import EmailIcon from '../../Images/email-icon.svg'
import KeyIcon from '../../Images/key-icon.svg'
const LoginForm = (props) => {
    return (
        <Fragment>
            <h3 className="login-welcome">Logga in på K-Play</h3>
            <form className="login-form" >
                <div className="input-field">
                    <div className="icon">
                        <img src={EmailIcon} />
                    </div>
                    <input type="text" name="email" placeholder="E-Mail" />
                </div>

                <div className="input-field">
                    <div className="icon">
                        <img src={KeyIcon} />
                    </div>
                    <input type="password" name="password" placeholder="Lösenord" />
                </div>
            </form>
        </Fragment>
    );
};

export default LoginForm;
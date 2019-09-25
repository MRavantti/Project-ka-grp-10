import React, { Fragment } from 'react';
import FacebookLogo from '../../Images/facebook-logo.svg'
import './FacebookLoginButton.css'

const FacebookLoginButton = (props) => {
    return (
        <Fragment>
            <button className="facebook-login">
                <img src={FacebookLogo} />
                Logga in med Facebook
            </button>
        </Fragment>
    )
}

export default FacebookLoginButton;
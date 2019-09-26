import React, { Fragment } from 'react';
import './FacebookLoginButton.css'

const FacebookLoginButton = (props) => {
    return (
        <Fragment>
            <button className="facebook-login">
                <img src="/assets/svgs/facebook-logo.svg" />
                Logga in med Facebook
            </button>
        </Fragment>
    )
}

export default FacebookLoginButton;
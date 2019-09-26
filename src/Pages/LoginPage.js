import React, { Fragment } from 'react';
import LoginForm from '../Components/LoginForm';
import FacebookLoginButton from '../Components/FacebookLoginButton';
import { Link } from 'react-router-dom';

const LoginPage = (props) => {
    return (
        <Fragment>
            <LoginForm />
            <div className="line" />
            <FacebookLoginButton />
            <p className="cta-register">Inte medlem? <Link to="registration" ><span className="register-link">Registrera dig här</span></Link></p>
        </Fragment>
    );
}

export default LoginPage;
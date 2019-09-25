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
            <p>Inte medlem? <Link to="registration">Registrera dig här</Link></p>
        </Fragment>
    );
}

export default LoginPage;
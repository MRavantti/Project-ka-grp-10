import React, { Fragment } from 'react';
import LoginForm from '../Components/LoginForm';
const LoginPage = (props) => {
    return (
        <Fragment>
            <LoginForm />
            <div className="line" />
        </Fragment>
    );
};

export default LoginPage;
import React, { Fragment, useContext } from 'react';
import LoginForm from '../Components/LoginForm';
import FacebookLoginButton from '../Components/FacebookLoginButton';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { LoggedInContext } from '../contexts/LoggedInContext';


const LoginPage = (props) => {

    const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);

    return (
        <Fragment>
            {
                !isLoggedIn
                    ? <Fragment>
                        <LoginForm />
                        <div className="line" />
                        <FacebookLoginButton />
                        <p className="cta-register">Inte medlem? <Link to="registration" ><span className="register-link">Registrera dig här</span></Link></p>
                    </Fragment>
                    
                    : <Redirect to="/profile/user" />
            }
        </Fragment>
    );
}

export default LoginPage;
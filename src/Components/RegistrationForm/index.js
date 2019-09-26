import React, { Fragment } from 'react';
import './RegistrationForm.css';

const RegistrationForm = (props) => {
    return (
        <Fragment>
            <h3 className="registration-welcome">Skapa K-Play konto</h3>
            <form className="login-form" >
                <input className="input-registration" type="text" name="first-name" placeholder="Förnamn" />
                <input className="input-registration" type="text" name="last-name" placeholder="Efternamn" />
                <input className="input-registration" type="text" name="email" placeholder="Skriv din e-mail" />
                <input className="input-registration" type="password" name="password" placeholder="skriv ett lösenord" />
                <input className="input-registration" type="password" name="password" placeholder="bekräfta lösenord" />
                <input className="registration-button" type="submit" name="submit" value="Fortsätt" onClick={props.changeState}/>
            </form>
        </Fragment>
    );
};

export default RegistrationForm;
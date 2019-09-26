import React, { Fragment } from 'react';
import RegistrationForm from '../Components/RegistrationForm';
import RegistrationProgressionCheck from '../Components/RegistrationProgressionCheck'
const RegistrationPage = (props) => {
    return (
        <Fragment>
            <RegistrationProgressionCheck />
            <RegistrationForm />
        </Fragment>
    );
};

export default RegistrationPage;
import React from 'react';
import { Link } from 'react-router-dom';

import BackButtonImage from '../../Images/back-button.png'

const BackButton = (props) => {
    return (

        <div className="back-button">
            <Link to="/"><img src={BackButtonImage} alt="back button" /></Link>
        </div>
    )
}

export default BackButton;
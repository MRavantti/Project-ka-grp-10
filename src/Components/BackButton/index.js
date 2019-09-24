import React from 'react';
import { Link } from 'react-router-dom';


const BackButton = (props) => {
    return (

        <div className="back-button">
            <Link to={props.link}><img src={props.img} alt="back button" /></Link>
        </div>
    )
}

export default BackButton;
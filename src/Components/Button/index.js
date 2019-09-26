import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <div className="button">
            <Link to={props.link}>{props.text}</Link>
        </div>
    );
};

export default Button;
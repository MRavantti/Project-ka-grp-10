import React from 'react';
import './style.css';

const Button = (props) => {
    return (
        <div className="button">
            <a href="">{props.text}</a>  
        </div>
    );
};

export default Button;
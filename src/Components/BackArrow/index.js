import React from 'react';
import './style.css';

const BackArrow = (props) => {

    let type = null; 
    type = props.transparent && "transparent";

    return (
        <div className={`back-arrow ${type}`}>
            <img src="/assets/svgs/back-arrow.svg" alt="Back arrow icon"/>
        </div>
    );
};

export default BackArrow;
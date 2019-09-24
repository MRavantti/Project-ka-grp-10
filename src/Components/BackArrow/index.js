import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const BackArrow = (props) => {

    let type = null; 
	type = props.transparent && "transparent";
	console.log(props);

    return (
        <div className={`back-arrow ${type}`}>
			<img onClick={props.goBack} src="/assets/svgs/back-arrow.svg" alt="Back arrow icon"/>
        </div>
    );
};

export default BackArrow;
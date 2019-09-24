import React from 'react';
import './style.css';

const BackArrow = (props) => {

    let type = null; 
	type = props.transparent && "transparent";

    return (
        <div className={`back-arrow ${type}`}>
			<svg onClick={props.goBack} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M9.41436 12.0001L16.7073 19.293L15.293 20.7072L6.58594 12.0001L15.293 3.29297L16.7073 4.70718L9.41436 12.0001Z" fill={props.transparent ? "white" : "black"}/>
			</svg>
        </div>
    );
};

export default BackArrow;
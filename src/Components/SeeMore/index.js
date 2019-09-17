import React from 'react';
import './style.css';

const SeeMore = (props) => {
    return (
        <div className="see-more">
            <p>{props.text}</p>
            <img src="./svgs/see-more.svg" alt="see-more icon"/>
        </div>
    );
};

export default SeeMore;
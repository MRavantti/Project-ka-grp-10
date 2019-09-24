import React from 'react';
import './style.css';

const SeeMore = (props) => {
    return (
        <div className="see-more">
            <p>{props.text}</p>
            {
				props.toggle &&
				<div onClick={props.toggle}><img src="/assets/svgs/see-more.svg" alt="see-more icon"/></div>
			}
        </div>
    );
};

export default SeeMore;
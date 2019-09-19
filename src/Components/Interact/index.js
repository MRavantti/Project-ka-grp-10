import React from 'react';
import './style.css';

const Interact = (props) => {
    return (
        <div className="interact">
            <img src={`/svgs/${props.type}.svg`}/>
            <p>{props.text}</p>
        </div>
    );
};

export default Interact;
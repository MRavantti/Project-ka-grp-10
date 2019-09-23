import React from 'react';
import './style.css'
import Interact from '../Interact';

const TextContainer = (props) => {

    const showInteractive = () => {
        if (props.player) {
            return (
                <div className="player-info">
                    <p>{props.info}</p>
                    <div className="interact-container">
                        <Interact text={"dela"} type="share"/>
                        <Interact text={"spara"} type="save"/>
                    </div>
                </div>
            )
        }
        else {
            return <div className="player-info"><p>{props.info}</p></div>
        }
    }

    return (
        <div className={`text-container ${props.size}`}>
            {
                props.info && showInteractive()
            }
            <p className="course-type">{props.courseType}</p>
            <h5>{props.header}</h5>
            <p>{props.text}</p>
            {
                props.player && !props.show && 
                <div className="see-more-btn" onClick={props.toggle}>
                    <p>Se mer</p>
                    <img src="/assets/svgs/down-arrow.svg" alt="Arrow down icon"/>
                </div>
            }
        </div>
    );
};

export default TextContainer;
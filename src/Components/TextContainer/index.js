import React from 'react';
import './style.css'
import Interact from '../Interact';

const TextContainer = (props) => {

    const func = () => {
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
        <div>
            <div className={`text-container ${props.size}`}>
                {
                    props.info && func()
                }
                <h5>Netflix Ambitions</h5>
                <p>Netflix's Lina Broneus on the plans for the Nordic regions</p>
                {
                    props.player && 
                    <div className="see-more-btn">
                        <p>Se mer</p>
                        <img src="/svgs/down-arrow.svg" alt="Arrow down icon"/>
                    </div>
                }
            </div>
        </div>
    );
};

export default TextContainer;
import React from 'react';
import './style.css'
import Interact from '../Interact';

const TextContainer = (props) => {

	const { content } = props;

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
			{props.info && showInteractive()}
			
            <h5>{props.player ? content.longTitle : content.title}</h5>

			<p>{props.size === "large" ? (props.player ? content.longDescription : content.description) : content.shortDescription}</p>

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
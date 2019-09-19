import React from 'react';
import Interact from '../Interact';
import TextContainer from '../TextContainer';
import './style.css';

const PlayerContainer = () => {
    return (
        <div className="player-container">
            {/* <Player/> */}
            <TextContainer size="large" type="video" info="Masterclass" player={true}/>
            {/* <div className="player-info">
                <p>Masterclass</p>
                <div className="interact-container">
                    <Interact text={"dela"} type="share"/>
                    <Interact text={"spara"} type="save"/>
                </div>
            </div> */}
        </div>
    );
};

export default PlayerContainer;
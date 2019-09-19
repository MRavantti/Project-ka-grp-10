import React, { useState } from 'react';
import TextContainer from '../TextContainer';
import ContentContainer from '../ContentContainer';
import './style.css';
import ToggleProfile from '../ToggleProfile';

const PlayerContainer = () => {

    const [showInfo, setShowInfo] = useState(false);

    const toggle = () => {
        console.log('click');
        setShowInfo(!showInfo);
    }

    return (
        <div className="player-container">
            {/* <Player/> */}
            <TextContainer size="large" type="video" info="Masterclass" player={true} toggle={toggle} show={showInfo}/>
            {
                showInfo && <ToggleProfile toggle={toggle}/>
            }
            <ContentContainer size="small" type="video" type="video" text="Relaterat innehåll"/>
        </div>
    );
};

export default PlayerContainer;
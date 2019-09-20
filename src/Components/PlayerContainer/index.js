import React, { useState } from 'react';
import './style.css';
import YouTubePlayer from '../YouTubePlayer';
import TextContainer from '../TextContainer';
import ContentContainer from '../ContentContainer';
import ToggleProfile from '../ToggleProfile';
import SoundCloudPlayer from '../SoundCloudPlayer';

const PlayerContainer = () => {

    const [showInfo, setShowInfo] = useState(false);

    let video = false;

    const toggle = () => {
        console.log('click');
        setShowInfo(!showInfo);
    }

    return (
        <div className="player-container">
            {
                video ? 
                <YouTubePlayer/> : 
                <SoundCloudPlayer
                    streamUrl="https://api.soundcloud.com/tracks/501159645/stream"
                    trackTitle="track one"
                    preloadType="metadata"
                    clientId={process.env.REACT_APP_SC_CLIENT_ID}
                />
            }
            <TextContainer size="large" type="video" info="Masterclass" player={true} toggle={toggle} show={showInfo}/>
            {
                showInfo && <ToggleProfile toggle={toggle}/>
            }
            <ContentContainer size="small" type="video" type="video" text="Relaterat innehåll"/>
        </div>
    );
};

export default PlayerContainer;
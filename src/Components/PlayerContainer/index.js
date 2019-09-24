import React, { useState } from 'react';
import './style.css';
import YouTubePlayer from '../YouTubePlayer';
import TextContainer from '../TextContainer';
import ContentContainer from '../ContentContainer';
import ToggleProfile from '../ToggleProfile';
import SoundCloudPlayer from '../SoundCloudPlayer';
import videos from '../../data/youtube';

const PlayerContainer = ({content}) => {

	const related = videos.slice(0, 15);

    const [showInfo, setShowInfo] = useState(false);

	let video = content.type === "video" ? true : false;

    const toggle = () => {
        console.log('click');
        setShowInfo(!showInfo);
    }

    return (
        <div className="player-container">
            {
                video ? 
                <YouTubePlayer id={content.id}/> : 
                <SoundCloudPlayer
                    streamUrl={content.streamUrl}
                    trackTitle={content.title}
                    preloadType="metadata"
                    clientId={process.env.REACT_APP_SC_CLIENT_ID}
                />
            }
            <TextContainer size="large" info="Masterclass" player={true} toggle={toggle} show={showInfo} content={content}/>
            {
                showInfo && <ToggleProfile toggle={toggle}/>
            }
            <ContentContainer size="small" text="Relaterat innehåll" content={related}/>
        </div>
    );
};

export default PlayerContainer;
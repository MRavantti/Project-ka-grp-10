import React, { useState } from 'react';
import './style.css';
import YouTubePlayer from '../YouTubePlayer';
import TextContainer from '../TextContainer';
import ContentContainer from '../ContentContainer';
import ToggleProfile from '../ToggleProfile';
import SoundCloudPlayer from '../SoundCloudPlayer';
import videos from '../../data/youtube';
import podcasts from '../../data/youtube';
import { AudioPlayerContext } from '../../contexts/AudioPlayerContext';

const PlayerContainer = ({content}) => {
	
	const { audioUrl, setAudioUrl } = AudioPlayerContext;
	
	let video = content.type === "video" ? true : false;

	const related = video ? videos.slice(0, 15) : podcasts.slice(0, 15);

    const [showInfo, setShowInfo] = useState(false);

    const toggle = () => {
        setShowInfo(!showInfo);
	}
	

    return (
        <div className={`player-container ${content.type}`}>
            {
                video &&
				<YouTubePlayer id={content.id}/>
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
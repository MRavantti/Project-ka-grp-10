import React, { useState, useEffect, useContext } from 'react';
import './style.css';
import YouTube from 'react-youtube';
import { AudioPlayerContext } from '../../contexts/AudioPlayerContext';

const YouTubePlayer = ({id}) => {

    const { audioUrl, setAudioUrl } = useContext(AudioPlayerContext);

    const [height, setHeight] = useState(0);
    
    const stopAudio = () => {
        setAudioUrl(null);
    }
	
    useEffect(() => {
        const player = document.querySelector('.youtube-player');
        let newHeight = player.scrollWidth/1.7778;
        setHeight(newHeight);
    }, [height])

    const opts = {
        width: '100%',
        height: `${height}px`,
        playerVars: {
            rel: 0,
            autoplay: 0
        }
    }

    return (
        <div className="youtube-player">
            <YouTube
                videoId={id}
                opts = {opts}
                onPlay={stopAudio}
            />
        </div>
    );
};

export default YouTubePlayer;
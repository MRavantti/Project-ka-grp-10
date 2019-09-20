import React, { useState, useEffect } from 'react';
import './style.css';
import YouTube from 'react-youtube';

const YouTubePlayer = () => {

    const [height, setHeight] = useState(0);

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
                videoId="_BhiH3GG8pI"
                opts = {opts}
            />
        </div>
    );
};

export default YouTubePlayer;
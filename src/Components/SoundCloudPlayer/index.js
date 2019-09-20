import React from 'react';
import { PlayButton, PrevButton, NextButton, VolumeControl, Timer, Progress } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';
import './style.css';
import { togglePlay } from '../../functions/scPlayer';


const SoundCloudPlayer = withCustomAudio(props => {
    const { trackTitle } = props;

    return (
        <div className="soundcloud-player">
            <Progress
                className="progress"
            />
            <div className="controls">
                <div className="control-buttons">
                    <PrevButton
                        {...props}
                        className="prev-button"
                    />
                    <PlayButton
                    {...props}
                    className="play-button"
                    />
                    <NextButton
                        className="next-button"
                        />
                </div>
                <h4>{trackTitle}</h4>
                <Timer {...props}/>
            </div>
        </div>
    );
});

export default SoundCloudPlayer;
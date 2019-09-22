import React from 'react';
import { PlayButton, PrevButton, NextButton, VolumeControl, Timer, Progress } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';
import './style.css';
import { togglePlay } from '../../functions/scPlayer';


const SoundCloudPlayer = withCustomAudio(props => {
    const { soundCloudAudio, trackTitle } = props;
    const audio = soundCloudAudio.audio;

    // console.log(audio.currentTime/audio.duration);
    // console.log(audio.currentTime);
    
    const replay = () => {
        audio.currentTime -= 30;
    }

    const forward = () => {
        audio.currentTime += 30;
    }

    const setCurrentTime = (e) => {
        audio.currentTime = audio.duration * e;
    }

    return (
        <div className="soundcloud-player">
            <Progress
                className="progress-container"
                innerClassName="progress"
                value={(audio.currentTime/audio.duration)*100}
                onSeekTrack={setCurrentTime}
            />
            <div className="controls">
                <div className="control-buttons">
                    <PrevButton
                        onPrevClick={replay}
                        className="prev-button"
                        // {...props}
                    />
                    <PlayButton
                        className="play-button"
                        {...props}
                    />
                    <NextButton
                        onNextClick={forward}
                        className="next-button"
                        // {...props}
                    />
                </div>
                <h4>{trackTitle}</h4>
                <Timer {...props}/>
            </div>
        </div>
    );
});

export default SoundCloudPlayer;
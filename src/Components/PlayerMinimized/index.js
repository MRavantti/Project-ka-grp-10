import React from 'react';
import { PlayButton, PrevButton, NextButton, Timer, Progress } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';
import './style.css';
import { togglePlay } from '../../functions/scPlayer';


const SoundCloudPlayer = withCustomAudio(props => {
    const { soundCloudAudio, trackTitle } = props;
	const audio = soundCloudAudio.audio;

    // console.log(audio.currentTime/audio.duration);
    // console.log(audio.currentTime);
    
    const replay = () => {
        audio.currentTime -= 10;
    }

    const forward = () => {
        audio.currentTime += 10;
    }

    const setCurrentTime = (e) => {
        audio.currentTime = audio.duration * e;
	}
	
	const togglePlay = (e) => {
		console.log(e.target);
		if (!audio.playing) {
			audio.play();
			audio.playing = true;
			e.target.classList.add('playing');	
		} else {
			audio.pause();
			audio.playing = false;
			e.target.classList.remove('playing');
		}
		
	}

    return (
        <div className="minimized-player">
			<p>Nu spelas: {trackTitle}</p>
			<Progress
				className="progress-container"
				innerClassName="progress"
				value={(audio.currentTime/audio.duration)*100}
				onSeekTrack={setCurrentTime}
			/>
			<div className="player">
				<div className="controls">
					<div className="control-buttons">
						<PrevButton
							onPrevClick={replay}
							className="previous-button"
							// {...props}
						/>
						<PrevButton
							onPrevClick={replay}
							className="replay-button"
							// {...props}
						/>
						<PlayButton
							onTogglePlay={togglePlay}
							className="play-button"
							// {...props}
						/>
						<NextButton
							onNextClick={forward}
							className="forward-button"
							// {...props}
						/>
						<Timer
							{...props}
							className="timer"
						/>
					</div>
				</div>
			</div>
        </div>
    );
});

export default SoundCloudPlayer;
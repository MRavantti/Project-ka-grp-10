import React, { useContext } from 'react';
import { PlayButton, PrevButton, NextButton, Timer, Progress } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';
import './style.css';
import { AudioPlayerContext } from '../../contexts/AudioPlayerContext';


const AudioPlayer = withCustomAudio(props => {
    const { soundCloudAudio, trackTitle } = props;
	const audio = soundCloudAudio.audio;

	const { audioUrl, setAudioUrl} = useContext(AudioPlayerContext);

	console.log(props);

    // console.log(audio.currentTime/audio.duration);
	// console.log(audio.currentTime);
	
	
	const previous = () => {
		audio.currentTime = 0;
	}
	
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
		setAudioUrl(props.streamUrl);
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
        <div className={`audio-player ${props.size}`} style={{backgroundImage: `url(${props.content.thumbnail})`}}>
			{props.size === "medium" && 
			<PlayButton
				onTogglePlay={togglePlay}
				className="play-button"
				// {...props}
			/>}
			
			<div className="player-container">
				<Progress
					className="progress-container"
					innerClassName="progress"
					value={(audio.currentTime/audio.duration)*100}
					onSeekTrack={setCurrentTime}
				/>
				
				<div className="player-controls">
					<PrevButton
						onPrevClick={previous}
						className="previous-button"
					/>
					
					<PrevButton
						onPrevClick={replay}
						className="replay-button"
					/>
					
					{props.size === "small" && 
					<PlayButton
						onTogglePlay={togglePlay}
						className="play-button"
					/>}
					
					{props.size === "medium" && 
					<Timer
						className="timer"
						{...props}
					/>}
					
					<NextButton
						onNextClick={forward}
						className="forward-button"
					/>
					
					{props.size === "small" &&
					<Timer
						className="timer"
						{...props}
					/>}
					
				</div>
			</div>
        </div>
    );
});

export default AudioPlayer;
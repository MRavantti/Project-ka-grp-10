import React, { useState, useEffect, useContext, Fragment } from 'react';
import { PlayButton, PrevButton, NextButton, Timer, Progress } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';
import './style.css';
import { AudioPlayerContext } from '../../contexts/AudioPlayerContext';
import podcasts from '../../data/soundcloud.json'


const AudioPlayer = withCustomAudio(props => {
	const { soundCloudAudio, trackTitle } = props;
	const audio = soundCloudAudio.audio;
	let title = trackTitle;
	
	const { audioUrl, setAudioUrl} = useContext(AudioPlayerContext);
	
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

	if (trackTitle === undefined) {
		let id = audioUrl.split("/");
		id = id[4];
		title = podcasts.filter(item => item.id == id);
		title = title[0].title;
	}

	const togglePlay = (e) => {
		if (props.streamUrl !== undefined && audioUrl !== props.streamUrl) {
			setAudioUrl(props.streamUrl);
		}
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

	let currentTime;
	let duration;

	if (audio) {
		let currentMinutes = Math.floor(audio.currentTime / 60);
		let currentSeconds = audio.currentTime - (currentMinutes * 60);
		currentSeconds = currentSeconds.toFixed(0);
		currentTime = currentMinutes.toString().padStart(2, '0') + ':' + currentSeconds.toString().padStart(2, '0');

		let durationMinutes = Math.floor(audio.duration / 60);
		let durationSeconds = audio.duration - (durationMinutes * 60);
		durationSeconds = durationSeconds.toFixed(0);
		duration = durationMinutes.toString().padStart(2, '0') + ':' + durationSeconds.toString().padStart(2, '0');
	}


    return (
        <div className={`audio-player ${props.size}`} style={{backgroundImage: `url(${props.content.thumbnail})`}}>
			{props.size === "large" && 
				<Fragment>
					<img className="large-player-hero" src="/assets/images/podcast.jpg"/>
					<img className="close-fullscreen" onClick={props.closePlayer} src="/assets/svgs/cross.svg" alt="cross"/>
					<div className="large-flex">
					<h4>Nu spelas: </h4>
					<img className="minimize-fullscreen" onClick={props.toggleFullscreen} src="/assets/svgs/down-arrow-white.svg"/>
					</div>
					<p>{props.content[0].longTitle}</p>
				</Fragment>
			}
			{props.size === "small" && 
			<div className="player-info" onClick={props.toggleFullscreen}>
				<p>Nu spelas: {title}</p>
				<img src="/assets/svgs/up-arrow-white.svg" alt="up arrow icon"/>
				<img onClick={props.closePlayer} src="/assets/svgs/cross.svg" alt="cross icon"/>
			</div>}
			{props.size === "medium" && 
			<PlayButton
				onTogglePlay={togglePlay}
				className={`play-button ${audio.playing && "playing"}`}
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

					{props.size !== "medium" && 
					<PlayButton
						onTogglePlay={togglePlay}
						className={`play-button ${audio.playing && "playing"}`}
					/>}

					{props.size === "medium" && (
						(typeof currentTime === "string" && duration !== "NaN:NaN") ?
						<div className="timer">{currentTime} | <span>{duration}</span></div> : 
						<div className="timer">00:00 | <span>00:00</span></div>)
					}

					<NextButton
						onNextClick={forward}
						className="forward-button"
					/>

					{props.size !== "medium" && (
						(typeof currentTime === "string" && typeof duration === "string") ?
						<div className="timer">{currentTime} | <span>{duration}</span></div> : 
						<div className="timer">00:00 | <span>00:00</span></div>)
					}

				</div>
			</div>
        </div>
    );
});

export default AudioPlayer;
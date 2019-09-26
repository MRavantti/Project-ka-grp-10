import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../Navbar';
import CoursesBox from '../CoursesBox';
import Footer from '../Footer';
import AudioPlayer from '../AudioPlayer';
import podcasts from '../../data/soundcloud.json';
import { AudioPlayerContext } from '../../contexts/AudioPlayerContext';
import { withRouter } from 'react-router';

const Layout = ({location, children}) => {

	const { audioUrl, setAudioUrl} = useContext(AudioPlayerContext);

	let content;
	let playerSize;
	
	if (location.pathname.includes('player') && podcasts.find(item => item.id == location.state.playerId)) {
		content = podcasts.filter(item => item.id == location.state.playerId);
		content = content[0];
		playerSize = "medium";
	} else if (audioUrl) {
		let id = audioUrl.split('/');
		id = id[4];
		content = podcasts.filter(item => item.id == id);
		playerSize = "small";
	}

	const toggleFullscreen = (e) => {
		if (e.target.src) {
			if (e.target.src.includes('cross.svg')) {
				closePlayer();
				return;
			}
		}
		playerSize = "large";
		console.log(playerSize);
	}

	const closePlayer = () => {
		setAudioUrl(null);
	}

    return (
        <div className="layout">
            <Navbar location={location}/>
			{ content &&
				<AudioPlayer
						toggleFullscreen={toggleFullscreen}
						size={playerSize}
						streamUrl={content.url}
						trackTitle={content.title}
						preloadType="metadata"
						clientId={process.env.REACT_APP_SC_CLIENT_ID}
						content={content}
					/>
			}
            {children}
            <CoursesBox/>
            <Footer player={audioUrl} location={location}/>
        </div>
    );
};

export default withRouter(Layout);
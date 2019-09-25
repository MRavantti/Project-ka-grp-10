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

	if (location.pathname.includes('player')) {
		content = podcasts.filter(item => item.id == location.state.playerId);
		content = content[0];
		playerSize = "medium";
	} else if (audioUrl) {
		let id = audioUrl.split('/');
		id = id[4];
		content = podcasts.filter(item => item.id == id);
		playerSize = "small";
		
	}

    return (
        <div className="layout">
            <Navbar/>
			{ content &&
				<AudioPlayer
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
            <Footer/>
        </div>
    );
};

export default withRouter(Layout);
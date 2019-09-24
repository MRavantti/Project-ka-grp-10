import React, { Fragment } from 'react';
import BackArrow from '../Components/BackArrow';
import PlayerContainer from '../Components/PlayerContainer';
import videos from '../data/youtube';
import podcasts from  '../data/soundcloud';

const PlayerPage = (props) => {
    const id = props.location.state.playerId;

	let content = videos.find(item => item.id === id);
	if (content === undefined) {
		content = podcasts.find(item => item.id === id);
	}

    return (
        <Fragment>
            <BackArrow transparent={false}/>
            <PlayerContainer content={content}/>
        </Fragment>
    )
}

export default PlayerPage;
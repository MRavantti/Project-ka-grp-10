import React, { Fragment } from 'react';
import BackArrow from '../Components/BackArrow';
import PlayerContainer from '../Components/PlayerContainer';

const PlayerPage = (props) => {

    const id = props.location.state.playerId

    return (
        <Fragment>
            <BackArrow transparent={false}/>
            <PlayerContainer/>
        </Fragment>
    )
}

export default PlayerPage;
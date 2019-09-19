import React from 'react';

const PlayerPage = (props) => {
    return (
        <h1>This is the player page for content: {props.location.state.playerId}</h1>
    )
}

export default PlayerPage;
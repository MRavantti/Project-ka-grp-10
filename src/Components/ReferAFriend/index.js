import React, { Fragment } from 'react';
import './ReferAFriend.css';

const ReferAFriend = (props) => {
    return (
        <Fragment>
            <div className="refer-friend">
                <h1 className="refer-friend-title">Snart klar!</h1>
                <p className="refer-friend-text">Varför inte berätta för en vän om K-Play innan du gör klart din registrering? Skriv personens E-post i fältet nedan och tryck sen på Skicka.</p>
                <form>
                    <input className="input-refer-friend-email" type="text" name="email" placeholder="Skriv din e-mail" />
                    <input className="refer-friend-button" type="submit" name="submit" value="Fortsätt" onClick={props.changeState} />
                </form>
                <div className="skip-this-step-button" onClick={props.changeState}>
                    <p>Skippa det här steget</p><img src="/assets/svgs/forward-arrow.svg" />
                </div>
            </div>
        </Fragment>
    );
};

export default ReferAFriend;
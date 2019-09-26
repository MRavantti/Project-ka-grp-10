import React, { Fragment } from 'react';
import './style.css';
import Button from '../Button';
import { Link } from 'react-router-dom';

const ProfileInfo = (props) => {
    return (
        <Fragment>
			<Link to="/profile/teacher">
            	<div className="profile-info">
					<img src="/assets/images/pia-olby.jpg" alt="profile"/>
					<div className="profile-text">
						<h5>Kursledare</h5>
						<div>
							<h3>Pia Olby</h3>
							<p>Sångpedagog</p>
						</div>
					</div>
            	</div>
			</Link>
            <div className="profile-buttons">
                <Button text="Videoföreläsningar" link="/profile/teacher"/>
                <Button text="Kurser & seminarier" link="/courses"/>
            </div>
            <div className="toggle">
				<p>Visa mindre</p>
                <img src="/assets/svgs/up-arrow.svg" alt="arrow up icon" onClick={props.toggle}/>
            </div>
        </Fragment>
    );
};

export default ProfileInfo;
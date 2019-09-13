import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

const App = () => {

	const [tracks, setTracks] = useState([]);
	
	useEffect(() => {
		const client_id = process.env.REACT_APP_SOUNDCLOUD_CLIENT_ID;
		const fetchData = async () => {
			// Fetching K-play's tracks from soundcloud with a limited amount of 200
			const result = await axios(`https://api.soundcloud.com/users/341191438/tracks/?client_id=${client_id}&limit=200`);

			// Mapping all the tracks and reformatting data
			let reformattedTracks = result.data.map(track => {
				let rTrack = track;
				let title = rTrack.title;
				let tagList = rTrack.tag_list;
				let imageUrl = rTrack.artwork_url;

				// Chaning imageurl to work with size "500x500" instead of "large"
				imageUrl = imageUrl.replace(/(large)/, "t500x500");
				rTrack.artwork_url = imageUrl;
				
				// Removing everything behind -, – in title
				title = title.replace(/-.+/, '');
				title = title.replace(/–.+/, '');

				// Removing the number and every words behind the 6th
				title = title.split(' ').slice(1, 6).join(' ');
				rTrack.title = title;

				// Removing some missplaced " from the tags
				tagList = tagList.split(' ');
				tagList = tagList.map(tag => tag.replace('"', ""));
				rTrack.tag_list = tagList;

				// Returning the new data
				return rTrack;
			});
			
			// Setting tracks to the reformatted data
			setTracks(reformattedTracks);

		}

		fetchData();
	}, [])
	


	return (
		<div>
			{tracks.map((track, key) => (
				<div key={key}>
					<h1>{track.title}</h1>
					<img src={track.artwork_url} alt="podcast"/>
					<ul>
						{track.tag_list.map((tag, key) => (
							<li key={key}>{tag}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}

export default App;



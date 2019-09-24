const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const limit = 200;
const clientId = process.env.SC_CLIENT_ID;
const userId = process.env.SC_USER_ID;

const fetchSoundCloud = async () => {
    
    let tracks = [];

    const fetchUrl = 'https://api.soundcloud.com/users';
    
    const res = await fetch(`${fetchUrl}/${userId}/tracks/?client_id=${clientId}&limit=${limit}`);
    const data = await res.json();
    tracks = data.map((track) => {

		// Removing everything behind -, – in title
		// Two difference dashes, dont remove any of them
        let title = track.title.replace(/-.+/, '');
        title = title.replace(/–.+/, '');

        let imageUrl = track.artwork_url.replace(/(large)/, "t500x500");

        let tagList = track.tag_list.split(' ');
		tagList = tagList.map(tag => tag.replace('"', ""));
		
		let date = track.created_at.split('+');
		date = date[0];

		let description = track.description.split('.');
		let longDescription = description.slice(0, 2);
		description = description.slice(0, 1);

		let shortDescription = track.description.slice(0, 20);
		shortDescription = `${shortDescription}...`;

        const updatedTrack = {
            id: track.id,
            title: title,
			description: description,
			shortDescription: shortDescription,
			longDescription: longDescription,
            date: date,
            streamUrl: track.stream_url,
            duration: track.duration,
            thumbnail: imageUrl,
            tags: tagList,
            playlistId: null,
            type: 'podcast'
        }
        return updatedTrack;
    })

    const file = path.join(__dirname, '../src/data/soundcloud.json');
    fs.writeFile(file, JSON.stringify(tracks), err => {
        if (err) {
            return console.log(err);
        }
    })
	console.log('SoundCloud data fetched and updated');
}

module.exports = fetchSoundCloud;
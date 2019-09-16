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
        let title = track.title.replace(/-.+/, '');
        title = title.replace(/–.+/, '');

        let imageUrl = track.artwork_url.replace(/(large)/, "t500x500");

        let tagList = track.tag_list.split(' ');
        tagList = tagList.map(tag => tag.replace('"', ""));

        const updatedTrack = {
            id: track.id,
            title: title,
            description: track.description,
            date: track.created_at,
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
    console.log(tracks[0]);
    console.log('SoundCloud data fetched and updated');
}

module.exports = fetchSoundCloud;
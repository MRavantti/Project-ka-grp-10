require('dotenv').config();
const fetchYouTube = require('./fetchYouTube.js');
const fetchSoundCloud = require('./fetchSoundCloud.js');

console.log('Fetching data from YouTube and SoundCloud');

fetchYouTube();
fetchSoundCloud();
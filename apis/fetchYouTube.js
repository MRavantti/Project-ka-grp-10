const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const maxResults = 50;
const apiKey = process.env.YT_API_KEY;
const channelId = process.env.YT_CHANNEL_ID;
const durationFunction= require('./durationFunction.js');

const fetchYouTube = () => {

    let videos = [];

    const fetchUrl = 'https://www.googleapis.com/youtube/v3';
    
    fetch(`${fetchUrl}/search/?channelId=${channelId}&part=snippet&key=${apiKey}&maxResults=${maxResults}`)
        .then(res => res.json())
        .then(data => {
            data.items.map((item) => {
                fetch(`${fetchUrl}/videos?id=${item.id.videoId}&key=${apiKey}&part=contentDetails,snippet`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.items.length > 0) {
                            const video = data.items[0];
                            const snippet = video.snippet;
                            const durationInSeconds = durationFunction.YTDurationToSeconds(video.contentDetails.duration);
							const formatDuration = durationFunction.formatDuration(durationInSeconds);
							
                            const updateVideo = {
                                id: video.id,
                                title: snippet.title,
                                description: snippet.description,
                                publishedAt: snippet.publishedAt,
                                thumbnails: snippet.thumbnails,
                                tags: snippet.tags,
                                duration: formatDuration,
                                type: 'video'
							}
							
                            videos.push(updateVideo);
                            const file = path.join(__dirname, '../src/data/youtube.json');
                            fs.writeFile(file, JSON.stringify(videos), err => {
                                if (err) {
                                    return console.log(err);
                                }
                            });
                        }
                    })
            })
        });
        
    console.log('YouTube data fetched and updated');
}

module.exports = fetchYouTube;
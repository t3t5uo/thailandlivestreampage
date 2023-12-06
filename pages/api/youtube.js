import axios from 'axios';

export default async (req, res) => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: 'bangkok webcam live',
        type: 'video',
        eventType: 'live',
        maxResults: 10,
        key: process.env.YOUTUBE_API_KEY, // Set your API key in .env.local
      },
    });

    const videoUrls = response.data.items.map(item => `https://www.youtube.com/embed/${item.id.videoId}`);
    res.status(200).json(videoUrls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

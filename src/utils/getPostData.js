
import axios from "axios";

export const getPostData = async (videoId) => {
   
    const options = {
        method: 'GET',
        url: `https://instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com/?url=https://www.instagram.com/reel/${videoId}`,
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_X_RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com'
        }
      }; 
    try {
        const res = await axios.request(options)
        console.log(res.data);
        return res.data;
    } catch (error) {
        return {error: error}
    }
}
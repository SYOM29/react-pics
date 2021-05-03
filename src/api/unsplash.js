import axios from 'axios';
import unsplashApiKey from '../keys/unsplash.js';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          `Client-ID ${unsplashApiKey}`
      }
});
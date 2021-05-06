const axios = require('axios');
const keys = require('../config/keys.js');

module.exports = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          `Client-ID ${keys.unsplashApiKey}`
      }
});
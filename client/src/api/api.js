const axios = require('axios');

module.exports = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000'
});
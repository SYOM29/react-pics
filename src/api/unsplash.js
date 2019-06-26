import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID 7a398622b38cfa7d2ebc8fed5e561ee602f9d0a15f258983c992f6ab5e8c42af"
      }
});
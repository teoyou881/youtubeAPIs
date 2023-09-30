const axios = require('axios');

const axiosInstance = axios.create({
    /* Now we are using vite. When using vite, if you want to use environment variables,
     you can enter the environment variables after import.meta.env. */
    baseURL: 4000,
});

module.exports = axiosInstance;

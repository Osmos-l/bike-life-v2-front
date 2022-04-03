const axios = require("axios");
const BASE_URL = 'http://localhost:8100/api';

export default axios.create({
    baseURL: BASE_URL
})

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-type': 'application/json' },
    withCredentials: true
})

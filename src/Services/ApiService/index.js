const axios = require("axios");

export default axios.create({
    baseURL: 'http://localhost:8100/api'
})

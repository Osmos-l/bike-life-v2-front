import {getAccessToken, setAuthenticated} from "../Store";
import {tryRefreshAccessToken} from "../../Services/AuthService";

const axios = require("axios");
const BASE_URL = 'http://localhost:8100/api';

const axiosInstance = axios.create({
    baseURL: BASE_URL
})

axiosInstance.interceptors.request.use(
    config => {
        const accessToken = getAccessToken();

        if (!config.headers["Authorization"] && accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
    }, error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    response => response,
    async (error) => {
        try {
            const prevRequest = error?.config;
            if (error?.response?.status === 403) {
                if (prevRequest.sent) {
                    setAuthenticated(false);

                    return error;
                } else {
                    prevRequest.sent = true;

                    const accessToken = await tryRefreshAccessToken();

                    prevRequest.headers["Authorization"] = `Bearer ${accessToken}`;
                    return axiosInstance(prevRequest);
                }
            }
        } catch (e) {
            console.log("response intercept ->");
            console.error(e);
            return error;
        }

        return error;
    }
)

export default axiosInstance;

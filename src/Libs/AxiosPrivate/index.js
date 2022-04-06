import {getAccessToken, setAuthenticated} from "../Store";
import {logout, tryRefreshAccessToken} from "../../Services/AuthService";

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
            if (error?.response?.status === 403) {
                const prevRequest = error?.config;
                if (!prevRequest.sent) {
                    prevRequest.sent = true;

                    const accessToken = await tryRefreshAccessToken();

                    prevRequest.headers["Authorization"] = `Bearer ${accessToken}`;
                    return axiosInstance(prevRequest);
                }

                //logout();
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

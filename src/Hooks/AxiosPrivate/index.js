import axios from "../../Services/ApiService";
import { useEffect } from "react";

const useAxiosPrivate = (authContext) => {

    useEffect(() => {
        const requestIntercept = axios.interceptors.request.use(
            config => {
                if (!config.headers["Authorization"]) {
                    config.headers["Authorization"] = `Bearer ${authContext.accessToken}`;
                }
                return config;
            }, error => Promise.reject(error)
        );

        const responseIntercept = axios.interceptors.response.use(
            response => response,
            async (error) => {
                try {
                    const prevRequest = error?.config;
                    if (error?.response?.status === 403) {
                        if (prevRequest.sent) {
                            authContext.logout();
                        } else {
                            prevRequest.sent = true;

                            const accessToken = await authContext.tryRefreshAccessToken();

                            prevRequest.headers["Authorization"] = `Bearer ${accessToken}`;
                            return axios(prevRequest);
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

        return () => (
            axios.interceptors.request.eject(requestIntercept),
            axios.interceptors.response.eject(responseIntercept)
        )
    }, [authContext]);

    return axios;
}

export default useAxiosPrivate;

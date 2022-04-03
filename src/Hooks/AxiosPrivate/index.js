import { axiosPrivate } from "../../Services/ApiService";
import { useEffect } from "react";

const useAxiosPrivate = (authContext) => {

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers["Authorization"]) {
                    config.headers["Authorization"] = `Bearer ${authContext.tokens.accessToken}`;
                }
                return config;
            }, error => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403) {
                    if (prevRequest.sent) {
                        authContext.logout();
                        return error;
                    } else {
                        prevRequest.sent = true;

                        const accessToken = await authContext.refreshToken();

                        prevRequest.headers["Authorization"] = `Bearer ${accessToken}`;
                        return axiosPrivate(prevRequest);
                    }
                }
                return error;
            }
        )

        return () => (
            axiosPrivate.interceptors.request.eject(requestIntercept),
            axiosPrivate.interceptors.response.eject(responseIntercept)
        )
    }, [authContext]);

    return axiosPrivate;
}

export default useAxiosPrivate;

import axiosPrivate from "../../Services/ApiService";
import {useState} from "react";

export const useHookAuth = () => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    const login = ({accessToken, refreshToken}, user) => {
        setUser(user);
        setAccessToken(accessToken);
        localStorage.setItem("refresh_token", refreshToken);
    }

    const tryRefreshAccessToken = async () => {
        try {
            const refreshToken = localStorage.getItem("refresh_token");

            if (refreshToken) {
                const res = await axiosPrivate.post("/auth/refresh", { refreshToken });
                const accessToken = res.data.accessToken;

                setAccessToken(accessToken);

                return accessToken;
            } else {
                throw 'No refresh token';
            }

        } catch (e) {
            console.error(e);
            throw e;
        }

    }

    const logout = () => {
        setUser(null);
        setAccessToken(null);
        localStorage.removeItem("refresh_token");
    }

    return {
        user,
        accessToken,
        login,
        logout,
        tryRefreshAccessToken
    }
}

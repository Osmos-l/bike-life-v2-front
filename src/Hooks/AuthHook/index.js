import axios from "../../Services/ApiService";
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
                const res = await axios.post("/auth/refresh", { refreshToken });
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

    const logout = async () => {
        setUser(null);
        setAccessToken(null);

        const refreshToken = localStorage.getItem("refresh_token");
        if (refreshToken) {
            console.log("calling API");
            try {
                await axios.post("/auth/logout", {refreshToken});
            } catch (e) {
                console.log(e);
            }

        }

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

import axiosPrivate from "../../Services/ApiService";
import {useState} from "react";

export const useHookAuth = () => {
    const [user, setUser] = useState(null);
    const [tokens, setTokens] = useState(null);

    const login = (newTokens, newUser) => {
        setUser(newUser);
        setTokens(newTokens);
    }

    const refreshToken = async () => {
        const res = await axiosPrivate.post("/auth/refresh", null, {withCredentials: true});
        setTokens({ accessToken: res.data });

        return res.data;
    }

    const logout = () => {
        setUser(null);
        setTokens(null);
        //localStorage.removeItem("refreshToken");
    }

    return {
        user,
        tokens,
        login,
        logout,
        refreshToken
    }
}

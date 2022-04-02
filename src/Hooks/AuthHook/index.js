import {useState} from "react";

export const useHookAuth = () => {
    const [user, setUser] = useState(null);
    const [tokens, setTokens] = useState(null);

    const login = (newTokens, newUser) => {
        setUser(newUser);
        setTokens(newTokens);
    }

    const getAPIHeader = () => {
        if (tokens && tokens.accessToken) {
            return {
                headers: {
                    'Authorization': `Bearer ${tokens.accessToken}`
                }
            };
        } else {
            return {};
        }
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
        getAPIHeader
    }
}

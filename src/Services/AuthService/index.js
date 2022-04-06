import {makePostRequest} from "../ApiService";
import {getRefreshToken, setAccessToken, setAuthenticated, setRefreshToken} from "../../Libs/Store";

export const register = async (username, email, password) => {
    const response = await makePostRequest('/auth/register', {username, email, password});
    if (response.errors) {
        return response.errors;
    } else {
        return await login(username, password);
    }
}

export const login = async (username, password, rememberMe) => {
    const response = await makePostRequest('/auth/login', {username, password, rememberMe});
    if (response.tokens) {
        setAccessToken(response.tokens.accessToken);
        setAuthenticated(true);

        // Only available when user check "remember me"
        if (response.tokens.refreshToken) {
            setRefreshToken(response.tokens.refreshToken)
        };

        return [];
    }

    return response;
}

export const tryRefreshAccessToken = async () => {
    const refreshToken = getRefreshToken();
    if (refreshToken) {

        const response = await makePostRequest("/auth/refresh", { refreshToken });
        if (response.accessToken) {
            return response.accessToken;
        }
    }

    console.log("try refresh token -> logout");
    logout();
}

export const logout = () => {
    const refreshToken = getRefreshToken();
    if (refreshToken) {
        makePostRequest("/auth/logout", { refreshToken });
    }

    setAuthenticated(false);
    window.location.reload();
}

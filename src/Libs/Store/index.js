const BL_USER = "BL_User";
const BL_ACCESS_TOKEN = "BL_AccessToken";
const BL_REFRESH_TOKEN = "BL_RefreshToken";
const BL_IS_AUTHENTICATED = "BL_IsAuthenticated";

export const getUser = () => {
    return JSON.parse(sessionStorage.getItem(BL_USER));
}

export const getAccessToken = () => {
    return sessionStorage.getItem(BL_ACCESS_TOKEN)
}

export const getRefreshToken = () => {
    return localStorage.getItem(BL_REFRESH_TOKEN)
}

export const isAuthenticated = () => {
    if (!getAccessToken() && !getRefreshToken()) {
        return false;
    }

    return sessionStorage.getItem(BL_IS_AUTHENTICATED);
}

export const setUser = (user) => {
   sessionStorage.setItem(BL_USER, JSON.stringify(user)) ;
}

export const setAccessToken = (accessToken) => {
    sessionStorage.setItem(BL_ACCESS_TOKEN, accessToken);
}

export const setRefreshToken = (refreshToken) => {
    localStorage.setItem(BL_REFRESH_TOKEN, refreshToken);
}

export const setAuthenticated = (isAuthenticated) => {
    if (!isAuthenticated) {
        logout();
    }

    return sessionStorage.setItem(BL_IS_AUTHENTICATED, isAuthenticated);
}

const logout = () => {
    sessionStorage.removeItem(BL_USER);
    sessionStorage.removeItem(BL_ACCESS_TOKEN);
    localStorage.removeItem(BL_REFRESH_TOKEN);
}

import AuthService from "../AuthService";

export default function authHeader() {
    const tokens = AuthService.getTokens();
    if (tokens && tokens.accessToken) {
        return { 'x-access-token': tokens.accessToken };
    } else {
        return {};
    }
}

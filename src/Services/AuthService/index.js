import axios from "../ApiService";

export const AuthService = (authContext) => {

    const register = (username, email, password) => {
        return axios.post('/auth/register', {username, email, password})
            .then(async response => {
                if (response.data.errors) {
                    return response.data;
                } else {
                    return await login(username, password);
                }
            });
    }

    const login = (username, password) => {
       return axios.post('/auth/login', {username, password})
            .then(response => {
                if (response.data.tokens) {
                    authContext.login(response.data.tokens, response.data.user);
                }

                return response.data;
            });
    }

    return {
        register,
        login
    };
}

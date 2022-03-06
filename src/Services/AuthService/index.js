import axios from "axios";
import React from "react";

class AuthService {

    isAuthenticated() {
        const tokens = this.getTokens();

        return tokens && tokens.accessToken;
    }

    login(username, password) {
        return axios.post('http://localhost:8100/api/auth/login', {username, password})
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("tokens", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    register(username, email, password) {
        return axios.post('http://localhost:8100/api/auth/register', {username, email, password})
            .then(async response => {
                if (response.data.errors) {
                    return response.data;
                } else {
                    return await this.login(username, password);
                }
            });
    }

    logout() {
        localStorage.removeItem("tokens");
    }

    getTokens() {
        return JSON.parse(localStorage.getItem("tokens"));
    }

}

export default new AuthService();

import useAxios from "../../Libs/AxiosPrivate";

export const makePostRequest = async (endpoint, data) => {
    return await useAxios.post(endpoint, data)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error.response.data;
        });
}

export const makeGetRequest = async (endpoint) => {
    return await useAxios.get(endpoint)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error.response.data;
        });
}

export default {
    makePostRequest
};

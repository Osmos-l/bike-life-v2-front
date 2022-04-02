import axios from "../ApiService";

const UserService = (authContext) => {

    const getBikes = async () => {
        const user = authContext.user;

        return await axios.get(`/bike/${user._id}`, authContext.getAPIHeader())
            .then(response => {
                if (response.data) {
                    return response.data;
                }
            })
            .catch(function (error) {
                if (error.response) {
                    if (error.response.status == 401) {
                        authContext.logout();
                    }
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
            });
    }

    const getInventory = () => {
        return [];
    }

    const getTracks = () => {
        return [];
    }

    return {
        getBikes,
        getInventory,
        getTracks
    }
}

export default UserService;
